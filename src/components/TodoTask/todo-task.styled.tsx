import styled from "styled-components";

const Task = styled.div`
  .task-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 36px;
    margin-bottom: 17px;
    padding: 14px 20px 13px 20px;
    .info {
      font-family: "Roboto-Medium";
      display: flex;
      align-items: center;
      gap: 16px;

      .task-title {
        color: #2e2e2e;
      }
      .task-title.completed {
        font-family: "Roboto-Regular";
        color: #a9a9a9;
        text-decoration: line-through;
      }
    }
    .etc {
      position: relative;
      display: flex;
      cursor: pointer;

      .menu {
        position: absolute;
        top: 25px;
        left: -80px;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
        padding: 10px 6px;

        z-index: 1;
        min-width: 111px;
        .edit,
        .delete {
          font-family: "Roboto-Medium";
          font-size: 14px;
          border-radius: 10px;
          padding: 8px 15px;
          transition: 0.15s;
          &:hover {
            background: #585292;
            color: white;
          }
        }
        .edit {
          color: #2e2e2e;
        }
        .delete {
          color: #e07c7c;
        }
      }
    }
  }
  .task-edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 36px;
    margin-bottom: 17px;
    padding: 14px 6px 13px 20px;
    max-height: 51px;
    input {
      font-size: 16px;
      font-family: "Roboto-Medium";
      width: 70%;
      border: none;
      outline: none;
    }
    button {
      padding: 10px 17px 10px 15px;
      border-radius: 999px;
      border: none;
      background: #585292;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

export { Task };
