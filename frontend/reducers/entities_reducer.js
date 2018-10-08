import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import benches from './benches_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  benches
});

export default entitiesReducer;
