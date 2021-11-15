import React from "react";
import Checkbox from "./Checkbox";

const ToDo = ({ todo, handleToggle }) => {
  const setChecked = (isChecked) => {
    handleToggle(todo.id, isChecked);
  };

  return (
    <div className="toDoItem" id={todo.id} key={todo.id + todo.name}>
      <div className={todo.isCompleted ? "strike" : ""}>{todo.name}</div>
      <Checkbox checked={todo.isCompleted} setChecked={setChecked} />
    </div>
  );
};

export default ToDo;
