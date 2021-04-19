import { createSlice } from '@reduxjs/toolkit';
import { teamURL } from '../url';

const initialState = {
  team: {
    members: [],
  },
};

export const teamMembers = createSlice({
  name: 'teamMembers',
  initialState: initialState,
  reducers: {
    setTeamMembers: (state, action) => {
      const teamMembers = action.payload;
      state.team.members = teamMembers;
    },
    addNewTeamMember: (state, action) => {
      const addTeamMember = action.payload;
      state.team.members.push(addTeamMember.name);
    },
  },
});

export const getTeamMembers = () => {
  return dispatch => {
    fetch(teamURL, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Could not get team members.');
      })
      .then(json => {
        dispatch(teamMembers.actions.setTeamMembers(json.team));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
