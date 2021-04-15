import React, { useState, useEffect } from 'react';

import { teamURL } from '../url';

const TeamMembers = () => {
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
    <div>
      {teamMembers.map(teamMember => (
        <li key={teamMember}>{teamMember}</li>
      ))}
    </div>
  );
};
export default TeamMembers;
