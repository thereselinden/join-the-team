import { createSlice } from '@reduxjs/toolkit';
import { teamURL } from '../url';

const initialState = {
  team: {
    newMembers: [],
  },
};

export const teamMembers = createSlice({
  name: 'teamMembers',
  initialState: initialState,
  reducers: {
    setNewTeamMember: (state, action) => {
      const addTeamMember = action.payload;
      console.log('reducer ', addTeamMember);
      state.team.newMembers.push(addTeamMember);
    },
  },
});

export const getTeamMembers = () => {
  console.log('in the getTeamMembers');
  return dispatch => {
    console.log('after return dispatch');
    fetch(teamURL, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => {
        console.log('first then res');
        if (res.ok) {
          return res.json();
        }
        throw new Error('Could not get team members.');
      })
      .then(json => {
        console.log('json', json);
        dispatch(teamMembers.actions.setNewTeamMember(json.team));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
