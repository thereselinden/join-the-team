import { useState } from 'react';

//custom hook

const useInput = initialValues => {
  const [values, setValues] = useState(initialValues);
  //console.log(values);
  return [
    values, //returning the values
    e => {
      //returning an onchange function
      setValues({
        ...values, //keep all the values in there
        [e.target.name]: e.target.value, //based on the name of the input field we will update its value
      });
    },
  ];
};
export default useInput;
