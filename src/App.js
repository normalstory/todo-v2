import React, { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "react basic study", checked: true },
    { id: 2, text: "component styling study", checked: false },
    { id: 3, text: "building app study", checked: false },
  ]);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
};

export default App;
