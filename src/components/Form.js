import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { teamMembers } from '../redux/members';
import useInput from '../hooks/useInput';
import CustomCheckbox from './Checkbox';
import { useFormStyles } from '../theme/style';

const Form = () => {
  const classes = useFormStyles();
  const dispatch = useDispatch();
  const [values, handleChange, resetInputFields] = useInput({
    name: '',
    email: '',
  });

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(teamMembers.actions.addNewTeamMember({ name: values.name }));
    resetInputFields();
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
      <Button
        type="submit"
        disabled={!values.email || !values.name}
        variant="contained"
        color="primary"
      >
        I'm in, sign me up!
      </Button>
    </form>
  );
};
export default Form;
