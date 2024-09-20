import React, { useState } from "react";

import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todotext) => {
    setTodos((prev) => [...prev, todotext]);
  };

  return (
    <>
      <InputForm onAddTodo={addTodo} todos={todos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
