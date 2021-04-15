import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { teamURL } from '../url';
import colors from '../theme/colors.json';

const useStyles = makeStyles(() => ({
  teamWrapper: {
    display: 'grid',
    justifyContent: 'center',
    color: colors.primary.color,
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
      {teamMembers.map(teamMember => (
        <Typography variant="body1">
          <li key={teamMember}>{teamMember}</li>
        </Typography>
      ))}
    </div>
  );
};
export default TeamMembers;
