import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { teamURL } from '../url';
import colors from '../theme/colors.json';

const useStyles = makeStyles(theme => ({
  teamWrapper: {
    color: colors.primary.color,
    display: 'grid',
    gridRowGap: 10,
    alignSelf: 'center',
  },
  title: {
    color: colors.primary.color,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'table-caption',
    },
  },
  team: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paragraph: {
    width: 120,
  },
}));

const TeamMembers = () => {
  const classes = useStyles();

  const [teamMembers, setTeamMembers] = useState([]);
  console.log(teamMembers);

  useEffect(() => {
    fetch(teamURL)
      .then(res => res.json())
      .then(members => {
        setTeamMembers(members.team);
      });
  }, []);

  return (
    <section className={classes.teamWrapper}>
      <Typography variant="h2" className={classes.title}>
        Join the team
      </Typography>
      <div className={classes.team}>
        {teamMembers.map(teamMember => (
          <Typography variant="body1" className={classes.paragraph}>
            <li key={teamMember}>{teamMember}</li>
          </Typography>
        ))}
      </div>
    </section>
  );
};
export default TeamMembers;
