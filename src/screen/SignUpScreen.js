import React from 'react';

import TeamMembers from '../components/TeamMembers';
import RegisterForm from '../components/RegisterForm';
import { MemberCointainer, RegisterContainer } from '../theme/layout';

const SignUpScreen = () => {
  return (
    <>
      <MemberCointainer>
        <h1>Join the team</h1>
        <TeamMembers />
      </MemberCointainer>
      <RegisterContainer>
        <RegisterForm />
      </RegisterContainer>
    </>
  );
};
export default SignUpScreen;
