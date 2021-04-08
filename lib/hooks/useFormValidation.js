import { useState } from "react";

const useFormValidation = (initialState) => {
  const [fields, setValidation] = useState(initialState);

  return [
    fields,
    (isValid, message) => (key) => {
      setValidation({
        ...fields,
        [key]: [isValid, message],
      });
    },
  ];
};

export default useFormValidation;
