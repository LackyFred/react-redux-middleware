import { combineReducers } from 'redux';
import UsersReducers  from './users';

const rootReducer = combineReducers({
  users: UsersReducers
});

export default rootReducer;
