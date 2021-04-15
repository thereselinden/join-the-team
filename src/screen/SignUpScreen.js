import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TeamMembers from '../components/TeamMembers';
import RegisterForm from '../components/RegisterForm';

import colors from '../theme/colors.json';
import backgroundImage from '../assets/background.svg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  members: {
    backgroundImage: `url(${backgroundImage})`,
    background: colors.primaryBackground.color,
  },
  title: {
    color: colors.primary.color,
    margin: 0,
    textAlign: 'center',
  },
  register: {},
}));

const SignUpScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} className={classes.members}>
          <Typography variant="h2" className={classes.title} xs={22}>
            Join the Team
          </Typography>
          <TeamMembers />
        </Grid>
        <Grid item xs={12} sm={8} className={classes.register}>
          <RegisterForm />
        </Grid>
      </Grid>
    </div>
  );
};
export default SignUpScreen;
