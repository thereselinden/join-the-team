import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import { teamURL } from '../url';
import { useTeamMembersStyles } from '../theme/style';

const TeamMembers = () => {
  const classes = useTeamMembersStyles();

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
