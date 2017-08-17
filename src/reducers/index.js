import UsersReducer from './UsersReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  users: UsersReducer
});
