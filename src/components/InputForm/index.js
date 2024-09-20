import React, { useState, useRef } from "react";

import "./InputForm.css";

const InputForm = ({ onAddTodo, todos }) => {
  const InputRef = useRef(null);

  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const onChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);

    if (enteredValue.trim().length === 0 || todos.includes(enteredValue)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setIsTouched(true);

    if (enteredValue.trim().length === 0 || todos.includes(enteredValue)) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    onAddTodo(enteredValue);
  };

  const ErrorClass = isTouched && !isValid ? "error" : "";

  return (
    <form onSubmit={submitHandler} className={ErrorClass}>
      <label htmlFor="text">리스트 입력하기</label>
      <input
        type="text"
        id="text"
        ref={InputRef}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      {isTouched && !isValid && <p>잘못된 형식입니다.</p>}
      <button>추가하기</button>
    </form>
  );
};

export default InputForm;
