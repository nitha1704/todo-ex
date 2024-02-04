import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskInterFace } from "../interfaces";

const GlobalContext = React.createContext<any>({});
export const GlobalProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allTodoList, setAllTodoList] = useState<TaskInterFace[]>([]);
  const [todoList, setTodoList] = useState<TaskInterFace[]>([]);
  const [todoText, setTodoText] = useState<string | number>("");

  const [completedItemNumber, setCompletedItemNumber] = useState<number>(0);
  const [progressBarWidth, setProgressBarWidth] = useState<string>("");

  const [handleClose, setHandleClose] = useState<number>(0);

  const calcProgress = () => {
    const todoLength = todoList.length;
    const completedItem = todoList.filter(
      (item: TaskInterFace) => item.completed
    ).length;
    const progressBarWidths = ((completedItem / todoLength) * 100).toFixed(2);
    setProgressBarWidth(progressBarWidths + "%");
    setCompletedItemNumber(completedItem);
  };

  const getTodoList = async () => {
    setIsLoading(true);
    await fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((res) => {
        const data = res.map((item: TaskInterFace) => {
          return {
            ...item,
            isMenuOpen: false,
            isEdit: false,
          };
        });
        setAllTodoList(data);
        setTodoList(data);
      })
      .catch((err) => {
        alert("Please start server before run this app");
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    item: TaskInterFace
  ) => {
    // Update UI
    let todoListArr = [...todoList];
    todoListArr[index].completed = event.target.checked;
    setTodoList(todoListArr);

    // Update API
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = {
      title: item.title,
      completed: event.target.checked,
    };

    fetch(`http://localhost:3001/todos/${item.id}`, {
      method: "PUT",
      body: JSON.stringify(raw),
      headers: myHeaders,
    })
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const handleOpenMenu = (index: number, item: TaskInterFace) => {
    let todoListArr = todoList.map((item: TaskInterFace) => {
      if (item.isMenuOpen) {
        return {
          ...item,
          isMenuOpen: false,
        };
      } else {
        return item;
      }
    });

    todoListArr[index].isMenuOpen = !todoListArr[index].isMenuOpen;
    setTodoList(todoListArr);
  };

  const handleOpenEdit = (index: number, item: TaskInterFace) => {
    // Update UI
    let todoListArr = [...todoList];
    todoListArr[index].isEdit = true;
    setTodoList(todoListArr);
  };

  const handleEditTextTodo = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // Update UI
    let todoListArr = [...todoList];
    todoListArr[index].title = (event.target as HTMLInputElement).value;
    setTodoList(todoListArr);
  };

  const handleSubmitEdit = (item: TaskInterFace) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = {
      title: item?.title,
      completed: item?.completed,
    };

    fetch(`http://localhost:3001/todos/${item.id}`, {
      method: "PUT",
      body: JSON.stringify(raw),
      headers: myHeaders,
    })
      .then((res) => {
        getTodoList();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const handleDeleteTodo = (id: string) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
      headers: myHeaders,
    })
      .then((res) => {
        getTodoList();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const addTask = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = {
      id: uuidv4(),
      title: todoText,
      completed: false,
    };

    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify(raw),
      headers: myHeaders,
    })
      .then((res) => {
        console.log(res);
        setTodoText("");
        getTodoList();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const handleTodoFilter = (value: string) => {
    const filterItem = allTodoList.filter((item: TaskInterFace) => {
      return value === "done"
        ? item.completed
        : value === "undone"
        ? !item.completed
        : item;
    });

    setTodoList(filterItem);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoading,
        allTodoList,
        setAllTodoList,
        todoList,
        setTodoList,
        todoText,
        setTodoText,
        completedItemNumber,
        setCompletedItemNumber,
        progressBarWidth,
        setProgressBarWidth,

        handleCheckbox,
        handleDeleteTodo,
        handleEditTextTodo,
        handleOpenEdit,
        handleOpenMenu,
        handleSubmitEdit,
        handleTodoFilter,
        addTask,

        getTodoList,
        calcProgress,

        handleClose,
        setHandleClose,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };
