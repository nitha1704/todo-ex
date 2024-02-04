import styled from "styled-components";

const TodoSection = styled.div`
  background: #f5f5f5;
  max-width: 720px;
  width: 100%;
  min-height: 620px;
  padding: 61px 101px 63px 101px;
  border-radius: 20px;

  .progress {
    border-radius: 20px;
    background: #e07c7c;
    padding: 18px 19px 25px 19px;
    .progress-title {
      font-family: "Roboto-Medium";
      font-size: 28px;
      color: white;
    }
    .progress-bar {
      width: 100%;
      height: 7.3px;
      background: #3b3b3b;
      margin: 12.7px 0;
      border-radius: 20px;
      overflow: hidden;
      .line {
        background: white;
        width: auto;
        height: 100%;
        transition: 0.2s;
      }
    }
    .progress-track {
      display: flex;
      gap: 5px;
      color: #ebb9b8;
    }
  }

  .todo-list {
    margin-top: 34px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      span {
        font-size: 24px;
        font-family: "Roboto-Bold";
      }
    }
    .tasks {
      .task {
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
      }
      .item:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .add-task {
    input {
      font-family: "Roboto-Medium";
      background: #fff;
      border-radius: 36px;
      margin-bottom: 17px;
      padding: 14px 20px 13px 20px;
      border: none;
      outline: none;
      width: 100%;
    }
    input::placeholder {
      font-family: "Roboto-Regular";
      color: #bcbcbc;
    }
    input:read-only {
      pointer-events: none;
      background: lightgray;
    }
  }

  @media (max-width: 768px) {
    padding: 61px 51px 63px 51px;
  }
  @media (max-width: 576px) {
    padding: 31px 25px 33px 25px;
  }
  @media (max-width: 400px) {
    padding: 31px 15px 33px 15px;
  }
`;

export { TodoSection };
