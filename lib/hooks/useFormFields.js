import { useState } from "react";

const useFormFields = (initialState) => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (value) => (key) => {
      setValues({
        ...fields,
        [key]: value,
      });
    },
  ];
};

export default useFormFields;
