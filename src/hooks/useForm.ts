import { useState, type ChangeEvent } from "react";

export const useForm = <T extends object>(initialState: T) => {
  const [formState, setFormState] = useState<T>(initialState);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { type, name, value, checked } = target;

    setFormState({ ...formState, [name]: type == "checked" ? checked : value });
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    resetForm,
  };
};
