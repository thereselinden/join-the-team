import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { getTeamMembers } from '../redux/members';
import { useTeamMembersStyles } from '../theme/style';

const TeamMembers = () => {
  const classes = useTeamMembersStyles();
  const dispatch = useDispatch();

  const teamMembers = useSelector(store => store.teamMembers.team.members);

  useEffect(() => {
    dispatch(getTeamMembers());
  }, [dispatch]);

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
