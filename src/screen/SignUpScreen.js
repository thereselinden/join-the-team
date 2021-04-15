import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TeamMembers from '../components/TeamMembers';
import Register from '../components/Register';

import colors from '../theme/colors.json';
import backgroundImage from '../assets/background.svg';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
  },
  members: {
    backgroundImage: `url(${backgroundImage})`,
    background: colors.primaryBackground.color,
    display: 'flex',
  },
  register: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const SignUpScreen = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} className={classes.members}>
          <TeamMembers />
        </Grid>
        <Grid item xs={12} sm={9} className={classes.register}>
          <Register />
        </Grid>
      </Grid>
    </section>
  );
};
export default SignUpScreen;
