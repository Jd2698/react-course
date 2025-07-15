import { useFetchData } from "../hooks/useFetchData";

export interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export const App = () => {
  const { isLoading, data } = useFetchData();

  return (
    <>
      {isLoading ? (
        <p>Data is loading</p>
      ) : (
        <ul>{data && data.map((d) => <li key={d.id}>{d.name}</li>)}</ul>
      )}
    </>
  );
};
