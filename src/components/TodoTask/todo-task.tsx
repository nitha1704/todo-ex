import React, {useContext} from "react";
import { GlobalContext } from "../../context";
import { Task } from "./todo-task.styled";
const TodoTask = ({ item, index }: any) => {
  const {
    handleCheckbox,
    handleDeleteTodo,
    handleEditTextTodo,
    handleOpenEdit,
    handleOpenMenu,
    handleSubmitEdit,
  } = useContext(GlobalContext);
  return (
    <Task className="task" key={item?.id}>
      {item?.isEdit ? (
        <div className="task-edit">
          <input
            type="text"
            value={item?.title}
            onChange={(e) => handleEditTextTodo(e, index, item)}
          />
          <button onClick={() => handleSubmitEdit(item)}>Save</button>
        </div>
      ) : (
        <div className="task-info">
          <div className="info">
            <div className="checkbox-wrapper">
              <label className="datawow-checkbox-container">
                <input
                  type="checkbox"
                  checked={item?.completed}
                  onChange={(e) => handleCheckbox(e, index, item)}
                />
                <span className="checkmark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      d="M7.08413 11.0402L4.75158 8.70768L3.75 9.70927L7.08413 13.0434L13.9599 6.1676L12.9583 5.16602L7.08413 11.0402Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </label>
            </div>
            <span
              className={`task-title ${item?.completed ? "completed" : ""}`}
            >
              {item?.title}
            </span>
          </div>
          <div className="etc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => handleOpenMenu(index, item)}
            >
              <path
                d="M7.20039 11.9999C7.20039 12.6364 6.94753 13.2468 6.49745 13.6969C6.04736 14.147 5.43691 14.3999 4.80039 14.3999C4.16387 14.3999 3.55342 14.147 3.10333 13.6969C2.65325 13.2468 2.40039 12.6364 2.40039 11.9999C2.40039 11.3633 2.65325 10.7529 3.10333 10.3028C3.55342 9.85271 4.16387 9.59985 4.80039 9.59985C5.43691 9.59985 6.04736 9.85271 6.49745 10.3028C6.94753 10.7529 7.20039 11.3633 7.20039 11.9999ZM14.4004 11.9999C14.4004 12.6364 14.1475 13.2468 13.6974 13.6969C13.2474 14.147 12.6369 14.3999 12.0004 14.3999C11.3639 14.3999 10.7534 14.147 10.3033 13.6969C9.85325 13.2468 9.60039 12.6364 9.60039 11.9999C9.60039 11.3633 9.85325 10.7529 10.3033 10.3028C10.7534 9.85271 11.3639 9.59985 12.0004 9.59985C12.6369 9.59985 13.2474 9.85271 13.6974 10.3028C14.1475 10.7529 14.4004 11.3633 14.4004 11.9999V11.9999ZM19.2004 14.3999C19.8369 14.3999 20.4474 14.147 20.8974 13.6969C21.3475 13.2468 21.6004 12.6364 21.6004 11.9999C21.6004 11.3633 21.3475 10.7529 20.8974 10.3028C20.4474 9.85271 19.8369 9.59985 19.2004 9.59985C18.5639 9.59985 17.9534 9.85271 17.5033 10.3028C17.0532 10.7529 16.8004 11.3633 16.8004 11.9999C16.8004 12.6364 17.0532 13.2468 17.5033 13.6969C17.9534 14.147 18.5639 14.3999 19.2004 14.3999Z"
                fill="#9796A8"
              />
            </svg>
            {item?.isMenuOpen && (
              <div className="menu">
                <div
                  className="edit"
                  onClick={() => handleOpenEdit(index, item)}
                >
                  Edit
                </div>
                <div
                  className="delete"
                  onClick={() => handleDeleteTodo(item?.id)}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Task>
  );
};

export default TodoTask;
