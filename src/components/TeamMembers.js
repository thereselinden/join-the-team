import React, { useState, useEffect } from 'react';

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  console.log(teamMembers);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6')
      .then(res => res.json())
      .then(members => {
        setTeamMembers(members.team);
      });
  }, []);

  return (
    <>
      {teamMembers.map(teamMember => (
        <li key={teamMember}>{teamMember}</li>
      ))}
    </>
  );
};
export default TeamMembers;
