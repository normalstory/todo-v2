import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md"; //https://react-icons.github.io/
import "./TodoInsert.scss";

const TodoInsert = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => setValue(e.target.value), []);

  return (
    <form className="TodoInsert">
      <input
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
