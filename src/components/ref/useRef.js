import { useEffect, useRef, useState } from "react";

const useRefExample = () => {
  const [inputValue, setInputvalue] = useState("");
  const inputRef = useRef();
  const resetHandler = () => {
    setInputvalue("");
    inputRef.current.focus();
  };
  const changeHandler = (e) => {
    setInputvalue(e.target.value);
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={changeHandler}
      />
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default useRefExample;
