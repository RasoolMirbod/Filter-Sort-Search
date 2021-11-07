// 1.useRef() =>DOM access

import { useEffect } from "react";
import { useRef } from "react";

// 2.to store the value of previous state
const FunctionalRef = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input type="text" ref={inputRef} />;
};

export default FunctionalRef;
