import { useEffect, useState } from "react";
import { fetchComments } from "../helpers/fetchData";
import type { Comment } from "../components/App";

export const useFetchData = () => {
  const [data, setData] = useState<Comment[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initFetchComments = async () => {
    const res = await fetchComments();

    if (res) {
      setData(res.data);
      setIsLoading(res.isLoading);
    }
  };

  useEffect(() => {
    initFetchComments();
  }, []);

  return {
    isLoading,
    data,
  };
};
