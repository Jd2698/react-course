import { createContext, useState } from "react";

interface ICounterContext {
  data: number[];
  addNumber: () => void;
}

export const CounterContext = createContext<ICounterContext>({
  data: [],
  addNumber: () => {},
});

export const ProviderContext = ({ children }: any) => {
  const [data, setData] = useState([1, 2]);

  const addNumber = () => {
    setData([...data, data[data.length - 1] + 1]);
  };

  return (
    <>
      <CounterContext.Provider value={{ data, addNumber }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};
