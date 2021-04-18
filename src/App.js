import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import SignUpScreen from './screen/SignUpScreen';
import { teamMembers } from './redux/members';
import { getTeamMembers } from './redux/members';

const reducer = combineReducers({ teamMembers: teamMembers.reducer });
const store = configureStore({ reducer });

const App = () => {
  useEffect(() => {
    getTeamMembers();
  }, []);

  return (
    <Provider store={store}>
      <SignUpScreen />
    </Provider>
  );
};

export default App;
