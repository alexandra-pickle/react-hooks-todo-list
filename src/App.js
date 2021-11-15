import "./App.css";
import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import data from "./data.json";

function App() {
  const [toDoList, setToDoList] = useState(data);

  const addTask = (userInput) => {
    let copy = [
      ...toDoList,
      { id: toDoList.length + 1, name: userInput, isCompleted: false },
    ];
    setToDoList(copy);
  };

  const handleToggle = (itemId, isCompleted) => {
    let mapped = toDoList.map((item) =>
      item.id === itemId ? { ...item, isCompleted: isCompleted } : { ...item }
    );
    setToDoList(mapped);
  };

  return (
    <div id="container">
      <h1>To Do List</h1>
      <ToDoInput addTask={addTask} />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
