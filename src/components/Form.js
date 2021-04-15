import React from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import useInput from '../hooks/useInput';
import CustomCheckbox from './Checkbox';
import CustomButton from './Button';

const useStyles = makeStyles(() => ({
  form: {
    display: 'grid',
    gridRowGap: 10,
  },
}));

const Form = () => {
  const classes = useStyles();

  const [values, handleChange] = useInput({ name: '', email: '' });

  const handleSubmitForm = e => {
    e.preventDefault();
    console.log('form submitted');
    values.name = '';
    values.email = '';
  };
  return (
    <form onSubmit={handleSubmitForm} className={classes.form}>
      <TextField
        name="name"
        id="outlined-textarea"
        label="Name"
        variant="outlined"
        value={values.name}
        onChange={handleChange}
        required
      />
      <TextField
        name="email"
        id="email"
        label="Email"
        variant="outlined"
        value={values.email}
        onChange={handleChange}
        required
      />
      <CustomCheckbox />
      <CustomButton
        type="submit"
        onClick={() => console.log('button clicked')}
        text={'Im in, sign me up!'}
        disabled={!values.email || !values.name}
        variant="contained"
        color="primary"
      />
    </form>
  );
};

export default Form;
