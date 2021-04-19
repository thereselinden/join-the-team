import { useState } from 'react';

const useInput = initialValues => {
  const [values, setValues] = useState(initialValues);

  const reset = () => {
    setValues(initialValues);
  };

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    reset,
  ];
};
export default useInput;
