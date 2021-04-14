import React from 'react';
import useInput from '../hooks/useInput';
import Checkbox from './Checkbox';
import Button from './Button';

const RegisterForm = () => {
  const [values, handleChange] = useInput({ name: '', email: '' });

  return (
    <div>
      <h2>Register</h2>
      <h3>Team player - Be positive - Beat yesterday</h3>
      <p>
        Together we re-define the experience of online gaming through
        gamification and novel technical solutions
      </p>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <Checkbox />
      <Button
        type="submit"
        onClick={() => console.log('button clicked')}
        text={'I`m in, sign me up!'}
        disabled={!values.email || !values.name}
      />
    </div>
  );
};
export default RegisterForm;
