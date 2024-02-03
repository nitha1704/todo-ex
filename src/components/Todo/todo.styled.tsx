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
      }
    }
    .progress-track {
      display: flex;
      gap: 5px;
      color: #ebb9b8;
    }
  }
`;

export { TodoSection };
