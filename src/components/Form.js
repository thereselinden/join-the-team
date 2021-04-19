import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { teamMembers } from '../redux/members';
import useInput from '../hooks/useInput';
import CustomCheckbox from './Checkbox';
import CustomButton from './Button';
import { useFormStyles } from '../theme/style';

const Form = () => {
  const classes = useFormStyles();
  const dispatch = useDispatch();
  const [values, handleChange] = useInput({ name: '', email: '' });

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(teamMembers.actions.addNewTeamMember({ name: values.name }));
    console.log('form submitted');
    values.name = '';
    values.email = '';
  };

  //Do I need an onSubmit on the form?
  //If I do, what do I need to have as an onClick on the button?
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
        onClick={handleSubmitForm}
        text={'Im in, sign me up!'}
        disabled={!values.email || !values.name}
        variant="contained"
        color="primary"
      />
    </form>
  );
};
export default Form;
