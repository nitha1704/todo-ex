import { useContext, useEffect } from "react";
import { DatawowSelect, TodoTask } from "..";
import { TodoSection } from "./todo.styled";
import { GlobalContext } from "../../context";

const Todo = () => {
  const {
    isLoading,
    todoList,
    todoText,
    setTodoText,
    completedItemNumber,
    progressBarWidth,
    addTask,
    getTodoList,
    calcProgress,
  } = useContext(GlobalContext);

  const status = [
    {
      value: "all",
      name: "All",
    },
    {
      value: "done",
      name: "Done",
    },
    {
      value: "undone",
      name: "Undone",
    },
  ];

  useEffect(() => {
    getTodoList();
  }, []);

  useEffect(() => {
    calcProgress();

    console.log(todoList);
  }, [todoList]);

  return (
    <TodoSection className="todo">
      <div className="wrapper">
        {!isLoading ? (
          <div className="content">
            <div className="progress">
              <div className="progress-title">Progress</div>
              <div className="progress-bar">
                <div className="line" style={{ width: progressBarWidth }}></div>
              </div>
              <div className="progress-track">
                <span>{completedItemNumber ?? 0}</span>
                <span>Completed</span>
              </div>
            </div>

            <div className="todo-list">
              <div className="title">
                <span>Tasks</span>
                <DatawowSelect data={status} />
              </div>
              <div className="tasks">
                {todoList &&
                  todoList.length > 0 &&
                  todoList.map((item: any, index: number) => {
                    return <TodoTask item={item} index={index} key={item?.id} />;
                  })}
              </div>
            </div>

            <div className="add-task">
              <input
                type="text"
                readOnly={isLoading}
                placeholder="Add your todo..."
                onKeyUp={(event: any) => {
                  if (event.key === "Enter") {
                    addTask();
                  } else {
                    setTodoText(event.target.value);
                  }
                }}
              />
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </TodoSection>
  );
};

export default Todo;
