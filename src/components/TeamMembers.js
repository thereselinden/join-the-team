import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { teamURL } from '../url';
import colors from '../theme/colors.json';

const useStyles = makeStyles(theme => ({
  teamWrapper: {
    color: colors.primary.color,
    alignSelf: 'center',
  },
  title: {
    color: colors.primary.color,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'table-caption',
    },
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
    <div className={classes.teamWrapper}>
      <Typography variant="h2" className={classes.title}>
        Join the team
      </Typography>
      {teamMembers.map(teamMember => (
        <Typography variant="body1">
          <li key={teamMember}>{teamMember}</li>
        </Typography>
      ))}
    </div>
  );
};
export default TeamMembers;
