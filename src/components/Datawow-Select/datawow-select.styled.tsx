import styled from "styled-components";

const DataWowSelect = styled.div`
  .datawow-select {
    position: relative;
    z-index: 1;
    min-width: 110px;
  }

  .container {
    font-size: 16px;
    color: #939498;
  }

  .select-box {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .select-box .options-container {
    position: absolute;
    top: 125%;
    left: 0%;
    border-radius: 10px;
    background: white;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);

    max-height: 0;
    width: 100%;

    transition: all 0.4s;
    overflow: hidden;
    order: 1;

    opacity: 0;
    visibility: hidden;
    padding: 10px 6px;
  }

  .select-box.dirty .selected {
    color: #000;
  }

  .selected {
    padding: 7px 10px;
    width: 100%;
    height: 29px;
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;

    .placeholder-text {
      font-size: 13px !important;
      color: #000;
    }
  }

  .select-box .options-container.active {
    max-height: 160px;
    opacity: 1;
    visibility: visible;
    overflow-y: scroll;
  }

  .select-box .options-container.active + .selected::after {
    transform: rotateX(180deg);
  }

  .select-box .option {
    position: relative;
    color: #404040;
    padding: 6.5px 8.6px;
    cursor: pointer;
    transition: 0.1s;
    background-color: white;
    margin-top: 3px;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }
  .select-box .option.active {
    background-color: #585292;
    label {
      color: white;
    }
  }

  .select-box .option:first-child {
    margin-top: 0;
  }

  .select-box .option:hover {
    background: #585292;
    label {
      color: white;
    }
  }

  .select-box label {
    font-family: "Roboto-Medium";
    font-size: 13px;
    color: #2e2e2e;
    cursor: pointer;
  }

  .select-box .option .radio {
    display: none;
  }

  .selected.invalid {
    border: 1px solid #cb3a31;
  }

  .arrow-icon {
    position: absolute;
    top: 52%;
    right: 4%;
    transform: translateY(-50%);
    transition: 0.3s;
    display: flex;
    cursor: pointer;
  }
  .arrow-icon.active {
    transform: translateY(-40%) rotate(180deg);
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  //////////// Scrollbar Customize //////////////

  // .select-box .options-container::-webkit-scrollbar {
  //   width: 15px;
  //   background: white;
  //   border-radius: 10px 8px 28px 10px;
  // }

  // .select-box .options-container::-webkit-scrollbar-thumb {
  //   background: #051640;
  //   border-radius: 10px 8px 8px 10px;
  // }

  @media (max-width: 768px) {
    .selected {
      max-width: 100%;
    }
  }

  @media (max-width: 576px) {
    .selected {
      max-height: initial;
    }
  }
`;

export { DataWowSelect };
