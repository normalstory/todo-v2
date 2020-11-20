import React, { useReducer, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

//더미 데이터 랜더링
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  //useState
  // const [todos, setTodos] = useState(
  //   createBulkTodos //더미2
  //   // [ //더미1
  //   //   { id: 1, text: "react basic study", checked: true },
  //   //   { id: 2, text: "component styling study", checked: false },
  //   //   { id: 3, text: "building app study", checked: false },
  //   // ]
  // );
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  //useRef, useCallback
  //  const nextId = useRef(4); //더미1
  const nextId = useRef(2501); //더미2

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      //setTodos(todos.concat(todo)); //useState함수(=>) 최적화 전
      //setTodos((todos) => todos.concat(todo));
      dispatch({ type: "INSERT", todo }); //useReducer로 최적화
      nextId.current += 1;
    },
    //[todos] //함수 최적화 전
    []
  );

  //filter(true,false)
  const onRemove = useCallback(
    (id) => {
      //setTodos(todos.filter((todo) => todo.id !== id)); //useState함수(=>) 최적화 전
      //setTodos((todos) => todos.filter((todo) => todo.id !== id));
      dispatch({ type: "REMOVE", id }); //useReducer로 최적화
    },
    //[todos] ////함수 최적화 전
    []
  );

  //onToggle
  const onToggle = useCallback(
    (id) => {
      // setTodos((todos) =>
      //   todos.map((todo) =>
      //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
      //   )
      // );
      dispatch({ type: "TOGGLE", id }); //useReducer로 최적화
    },
    //[todos]
    []
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
};

export default App;
