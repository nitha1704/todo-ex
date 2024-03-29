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
  }

  .add-task {
    input {
      font-family: "Roboto-Medium";
      background: #fff;
      border-radius: 36px;
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
