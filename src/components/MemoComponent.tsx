import { useMemo, useState } from "react";

export const MemoComponent = () => {
  const [show, setShow] = useState(true);
  const [list, setList] = useState<number[]>([1, 2, 3]);

  const getResult = useMemo(() => {
    console.log("calculando...");

    return list.reduce((a, b) => a + b, 0);
  }, [list]);

  return (
    <>
      <p>{list}</p>
      <p>{getResult}</p>

      <button
        className="btn btn-success m-2"
        onClick={() => {
          setList((l) => [...l, l[l.length - 1] + 1]);
        }}
      >
        Add +1
      </button>

      <button className="btn btn-secondary m-2" onClick={() => setShow(!show)}>
        {show ? "hidden" : "show"}
      </button>
    </>
  );
};
