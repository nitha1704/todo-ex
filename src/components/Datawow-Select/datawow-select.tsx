import React, {useContext} from "react";
import { GlobalContext } from "../../context";

const DatawowSelect = () => {
  const { handleTodoFilter } = useContext(GlobalContext);
  return (
    <select onChange={(e) => handleTodoFilter(e)}>
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="undone">Undone</option>
    </select>
  );
};

export default DatawowSelect;
