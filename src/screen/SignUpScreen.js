import React from 'react';

import TeamMembers from '../components/TeamMembers';
import RegisterForm from '../components/RegisterForm';

const SignUpScreen = () => {
  return (
    <section>
      <div>
        <h1>Join the team</h1>
        <TeamMembers />
      </div>
      <div>
        <RegisterForm />
      </div>
    </section>
  );
};
export default SignUpScreen;
