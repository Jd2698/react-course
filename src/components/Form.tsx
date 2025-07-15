import { useEffect, useRef, type FormEvent } from "react";
import { useForm } from "../hooks/useForm";

const initialState = {
  email: "",
  password: "",
};

export const Form = () => {
  const { email, password, formState, onInputChange, resetForm } =
    useForm(initialState);

  const inputNameRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);

    inputNameRef.current?.focus();

    resetForm();
  };

  useEffect(() => {
    inputNameRef.current?.focus();
  }, []);

  return (
    <form className="p-4" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          ref={inputNameRef}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
