import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

interface Data {
  data: null | User[];
  isLoading: boolean;
  errors: null | any;
}

export const useFetchUser = (url: string) => {
  const [fetchData, setFetchData] = useState<Data>({
    data: null,
    isLoading: true,
    errors: null,
  });

  const getData = async () => {
    try {
      const request = await fetch("pepep");
      const res = await request.json();

      setFetchData({
        data: res,
        isLoading: false,
        errors: null,
      });
    } catch (error) {
      console.log(error);

      setFetchData({
        data: null,
        isLoading: false,
        errors: error,
      });
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {
    ...fetchData,
  };
};
