import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Form from './Form';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      alignSelf: 'center',
    },
  },
}));

const Register = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h3">Register</Typography>
      <Typography variant="h4">
        Team player - Be positive - Beat yesterday
      </Typography>
      <Typography variant="body1">
        Together we re-define the experience of online gaming through
        gamification and novel technical solutions
      </Typography>
      <Form />
    </div>
  );
};
export default Register;
