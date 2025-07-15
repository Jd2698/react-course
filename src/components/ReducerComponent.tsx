import { useReducer, type FormEvent } from "react";
import { useForm } from "../hooks/useForm";

interface User {
  id: number;
  name: string;
  verified: boolean;
}

type Action =
  | { type: "[users] add user"; payload: User }
  | { type: "[users] delete user"; payload: User }
  | { type: "[users] reset users" };

const reducer = (state: User[], action: Action): User[] => {
  switch (action.type) {
    case "[users] add user":
      return [...state, action.payload];
    case "[users] delete user":
      return state.filter((user) => user.id != action.payload.id);
    case "[users] reset users":
      return [];
    default:
      return state;
  }
};

export const ReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const { name, verified, onInputChange, resetForm } = useForm({
    name: "",
    verified: false,
  });

  const addUser = () => {
    console.log(verified);

    dispatch({
      type: "[users] add user",
      payload: {
        id: new Date().getTime(),
        name,
        verified,
      },
    });

    resetForm();
  };

  const deleteUser = (user: User) => {
    dispatch({
      type: "[users] delete user",
      payload: user,
    });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name);

    if (name.trim() == "") return;

    addUser();
  };

  return (
    <>
      <ul>
        {state.map((e) => (
          <li key={e.id}>
            <span>{e.name}</span>
            <span>{e.verified ? "✅" : "✖️"}</span>
            <button
              className="btn btn-danger m-2"
              onClick={() => deleteUser(e)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onInputChange}
          autoFocus
          className="m-2"
        />

        <input
          type="checkbox"
          checked={verified}
          name="verified"
          onChange={onInputChange}
        ></input>
      </form>

      <button
        className="btn btn-danger m-2"
        onClick={() => dispatch({ type: "[users] reset users" })}
      >
        reset
      </button>
    </>
  );
};
