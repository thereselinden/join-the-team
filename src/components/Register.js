import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Form from './Form';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'grid',
    gridRowGap: 10,
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      alignSelf: 'center',
    },
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: 25,
    },
  },
  paragraph: {
    color: 'rgba(0,0,0,.6)',
  },
}));

const Register = () => {
  const classes = useStyles();

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
