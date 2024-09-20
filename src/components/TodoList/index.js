import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
