import { useState, useEffect } from "react";
import { TodoSection } from "./todo.styled";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = async () => {
    await fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((res) => {
        setTodoList(res);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  const calcProgress = () => {
    return "70%";
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <TodoSection className="todo">
      <div className="wrapper">
        {todoList && todoList.length > 0 ? (
          <div className="content">
            <div className="progress">
              <div className="progress-title">Progress</div>
              <div className="progress-bar">
                <div className="line" style={{ width: calcProgress() }}></div>
              </div>
              <div className="progress-track">
                <span>12</span>
                <span>Completed</span>
              </div>
            </div>
            <div className="todo-list">
              {todoList &&
                todoList.length > 0 &&
                todoList.map((item: any) => {
                  return <h1 key={item?.id}>{item?.title}</h1>;
                })}
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
