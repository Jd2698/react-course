import React, { useCallback, useState } from "react";

const SonComponent = React.memo(
  ({ increment }: { increment: (n: number) => void }) => {
    console.log("drawing in son");

    return (
      <>
        <button onClick={() => increment(1)}>increment</button>
      </>
    );
  }
);

export const MemoCounter = () => {
  console.log("drawing in dad");

  const [count, setCount] = useState(0);

  const increment = useCallback((n: number) => {
    setCount((c) => c + n);
  }, []);

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>

      <SonComponent increment={increment} />
    </>
  );
};
