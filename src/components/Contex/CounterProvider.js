import React, { useContext, useState } from "react";

const CounterContex = React.createContext(); //state
const CounterContexDispatcher = React.createContext(); //setState()

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContex.Provider value={count}>
      <CounterContexDispatcher.Provider value={setCount}>
        {children}
      </CounterContexDispatcher.Provider>
    </CounterContex.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContex);

export const useCountActions = () => {
  const setCount = useContext(CounterContexDispatcher);
  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addFive = () => {
    setCount((prevCount) => prevCount + 5);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { addFive, addOne,decrement };
};
