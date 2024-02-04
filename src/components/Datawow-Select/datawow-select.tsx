import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context";
import { DataWowSelect } from "./datawow-select.styled";
import { DatawowSelectInterFace } from "../../interfaces";

const DatawowSelect = ({ data }: any) => {
  const { handleTodoFilter } = useContext(GlobalContext);

  const [isOptionContainerActive, setIsOptionContainerActive] =
    useState<boolean>(false);

  const [optionPlaceholderText, setOptionPlaceholderText] = useState<string>();
  const [optionPlaceholderValue, setOptionPlaceholderValue] =
    useState<string>("all");

  const handleCloseFilter = (event: any) => {
    const elem = document.querySelector(".datawow-select");
    if (elem && !elem.contains(event.target)) {
      setIsOptionContainerActive(false);
    }
  };

  const handleSelect = (item: DatawowSelectInterFace) => {
    setOptionPlaceholderText(item?.name);

    // Set Timeout for smooth animation when option fade up
    setTimeout(() => {
      setOptionPlaceholderValue(item?.value);
    }, 400);

    handleTodoFilter(item?.value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseFilter);
    return () => {
      document.removeEventListener("mousedown", handleCloseFilter);
    };
  }, []);

  return (
    <DataWowSelect className="datawow-select">
      <div className="datawow-select container">
        <div
          className="select-box"
          onClick={() => setIsOptionContainerActive(!isOptionContainerActive)}
        >
          <div
            className={`options-container ${
              isOptionContainerActive ? "active" : ""
            }`}
          >
            <div className="wrapper">
              {data &&
                data.length > 0 &&
                data.map((item: DatawowSelectInterFace) => {
                  return (
                    <div
                      className={`option ${
                        optionPlaceholderValue === item?.value ? "active" : ""
                      }`}
                      onClick={() => handleSelect(item)}
                      key={item?.id}
                    >
                      <input type="radio" className="radio" id=" " name=" " />
                      <label htmlFor="">{item?.name}</label>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="selected">
            <span className="placeholder-text">
              {optionPlaceholderText ?? "All"}
            </span>
          </div>
          <div className="arrow-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M9.50521 5.4209L7.00096 7.92515L4.49671 5.4209L3.67188 6.24573L7.00096 9.57482L10.33 6.24573L9.50521 5.4209Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </DataWowSelect>
  );
};

export default DatawowSelect;
