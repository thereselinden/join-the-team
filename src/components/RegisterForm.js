import React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import useInput from '../hooks/useInput';
import CustomCheckbox from './Checkbox';
import CustomButton from './Button';

const RegisterForm = () => {
  const [values, handleChange] = useInput({ name: '', email: '' });

  const handleSubmitForm = e => {
    e.preventDefault();
    console.log('form submitted');
    values.name = '';
    values.email = '';
  };
  return (
    <div>
      <Typography variant="h3">Register</Typography>
      <Typography variant="h4">
        Team player - Be positive - Beat yesterday
      </Typography>
      <Typography variant="body1">
        Together we re-define the experience of online gaming through
        gamification and novel technical solutions
      </Typography>
      <form onSubmit={handleSubmitForm}>
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
        <div></div>
        <div>
          <CustomCheckbox />
          <CustomButton
            type="submit"
            onClick={() => console.log('button clicked')}
            text={'I`m in, sign me up!'}
            disabled={!values.email || !values.name}
            variant="contained"
            color="primary"
          />
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
