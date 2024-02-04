import React from "react";

const DatawowSelect = () => {
  const handleTodoFilter = (e: any) => {
    console.log(e.target.value);
    // const filterItem = allTodoList.filter((item: any) => {
    //   return e.target.value === "done"
    //     ? item.completed
    //     : e.target.value === "undone"
    //     ? !item.completed
    //     : item;
    // });

    // setTodoList(filterItem);
  };

  return (
    <select onChange={(e) => handleTodoFilter(e)}>
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="undone">Undone</option>
    </select>
  );
};

export default DatawowSelect;
