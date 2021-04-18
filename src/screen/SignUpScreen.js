import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import TeamMembers from '../components/TeamMembers';
import Register from '../components/Register';
import { useSignUpScreenStyles } from '../theme/style';

const SignUpScreen = () => {
  const classes = useSignUpScreenStyles();

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
