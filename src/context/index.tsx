import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const GlobalContext = React.createContext<any>({});

export const GlobalProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allTodoList, setAllTodoList] = useState<any>([]);
  const [todoList, setTodoList] = useState<any>([]);
  const [todoText, setTodoText] = useState<string | number>("");

  const [completedItemNumber, setCompletedItemNumber] = useState<number>(0);
  const [progressBarWidth, setProgressBarWidth] = useState<string>("");

  const calcProgress = () => {
    const todoLength = todoList.length;
    const completedItem = todoList.filter((item: any) => item.completed).length;
    const progressBarWidths = ((completedItem / todoLength) * 100).toFixed(2);
    setProgressBarWidth(progressBarWidths + "%");
    setCompletedItemNumber(completedItem);
  };

  const getTodoList = async () => {
    setIsLoading(true);
    await fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((res) => {
        const data = res.map((item: any) => {
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
        alert(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCheckbox = (e: any, index: number, item: any) => {
    // Update UI
    let todoListArr = [...todoList];
    todoListArr[index].completed = e.target.checked;
    setTodoList(todoListArr);

    // Update API
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = {
      title: item.title,
      completed: e.target.checked,
    };

    fetch(`http://localhost:3001/todos/${item.id}`, {
      method: "PUT",
      body: JSON.stringify(raw),
      headers: myHeaders,
    })
      .then((res) => {
        getTodoList();
      })
      .catch((err) => console.log(err));
  };

  const handleOpenMenu = (index: number, item: any) => {
    console.log("open");
    // Update UI
    //let todoListArr = [...todoList];

    let todoListArr = todoList.map((item: any) => {
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

  const handleOpenEdit = (index: number, item: any) => {
    // Update UI
    let todoListArr = [...todoList];
    todoListArr[index].isEdit = true;
    setTodoList(todoListArr);

    console.log(item);
  };

  const handleEditTextTodo = (e: any, index: number, item: any) => {
    // Update UI
    let todoListArr = [...todoList];
    todoListArr[index].title = e.target.value;
    setTodoList(todoListArr);

    console.log(e.target.value);
  };

  const handleSubmitEdit = (item: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = {
      title: item?.title,
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

  const handleTodoFilter = (e: any) => {
    const filterItem = allTodoList.filter((item: any) => {
      return e.target.value === "done"
        ? item.completed
        : e.target.value === "undone"
        ? !item.completed
        : item;
    });

    setTodoList(filterItem);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  useEffect(() => {
    calcProgress();

    console.log(todoList);
  }, [todoList]);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };
