import { useContext, useEffect } from "react";
import { DatawowSelect, TodoTask } from "..";
import { TodoSection } from "./todo.styled";
import { GlobalContext } from "../../context";
import { TaskInterFace } from "../../interfaces";
const Todo = () => {
  const {
    isLoading,
    todoList,
    setTodoText,
    completedItemNumber,
    progressBarWidth,
    addTask,
    getTodoList,
    calcProgress,
    handleCloseAllMenu
  } = useContext(GlobalContext);

  const status = [
    {
      id: "1",
      value: "all",
      name: "All",
    },
    { id: "2", value: "done", name: "Done" },
    { id: "3", value: "undone", name: "Undone" },
  ];

  useEffect(() => {
    getTodoList();
  }, []);

  useEffect(() => {
    calcProgress();
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
                  todoList.length > 0 ?
                  todoList.map((item: TaskInterFace, index: number) => {
                    return <TodoTask item={item} index={index} key={item?.id} />;
                  })
                  : <p style={{marginBottom: '20px'}}>No item</p>
                }
              </div>
            </div>

            <div className="add-task">
              <input
                type="text"
                readOnly={isLoading}
                placeholder="Add your todo..."
                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  if (event.key === "Enter") {
                    addTask();
                  } else {
                    setTodoText((event.target as HTMLInputElement).value);
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
