import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

//   const handleDeleteTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//   };

const handleDeleteTask = (index) => () => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  

  return (
    <div>
      <ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleAddTask}>add task</button>
        {tasks.map((task, index) => (
          <li key="index">
            {task}
            <button onClick={handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h1>my to-do list</h1>
      
    </div>
  );
};

export default TodoList;
