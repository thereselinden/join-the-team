import React from 'react';
import Typography from '@material-ui/core/Typography';

import Form from './Form';
import { useRegisterStyles } from '../theme/style';

const Register = () => {
  const classes = useRegisterStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h3">Register</Typography>
      <Typography variant="h4" className={classes.subTitle}>
        Team player - Be positive - Beat yesterday
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        Together we re-define the experience of online gaming through
        gamification and novel technical solutions
      </Typography>
      <Form />
    </div>
  );
};
export default Register;
