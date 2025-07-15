import type { Comment } from "../components/App";

export const fetchComments = async (): Promise<
  | {
      data: Comment[];
      isLoading: boolean;
    }
  | undefined
> => {
  try {
    const res: Comment[] = await (
      await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
    ).json();
    return {
      data: res,
      isLoading: false,
    };
  } catch (error) {
    console.log(error);
  }
};
