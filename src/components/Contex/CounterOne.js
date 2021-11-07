import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const { addFive, addOne, decrement } = useCountActions();

  return (
    <div>
      <h2>count is :{count}</h2>
      <button onClick={addOne}>add one</button>
      <button onClick={addFive}>add Five</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CounterOne;
