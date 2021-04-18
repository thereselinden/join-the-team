import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { teamURL } from '../url';
import { useTeamMembersStyles } from '../theme/style';
import { getTeamMembers } from '../redux/members';
//import { teamMembers } from '../redux/members';

const TeamMembers = () => {
  const classes = useTeamMembersStyles();
  // const dispatch = useDispatch();

  const reduxTest = useSelector(store => store.teamMembers.team.newMembers);
  console.log('reduxtest', reduxTest);

  const [teamMembers, setTeamMembers] = useState([]);
  //console.log(teamMembers);

  useEffect(() => {
    console.log('in useEffect');
    getTeamMembers();
  }, [reduxTest]);

  useEffect(() => {
    fetch(teamURL)
      .then(res => res.json())
      .then(members => {
        // console.log('members', members);
        setTeamMembers(members.team);
        //dispatch(teamMembers.actions.setNewTeamMember(members.team));
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
