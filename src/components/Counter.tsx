import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <h2>Counter: {count}</h2>

      <button className="btn btn-success" onClick={decrement}>
        -1
      </button>
      <button className="btn btn-danger mx-2" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
    </>
  );
};
