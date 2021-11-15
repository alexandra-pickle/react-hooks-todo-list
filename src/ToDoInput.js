import React, { useState } from "react";

const ToDoInput = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          name="toDoItem"
          onChange={handleChange}
          placeholder="Enter task..."
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ToDoInput;
