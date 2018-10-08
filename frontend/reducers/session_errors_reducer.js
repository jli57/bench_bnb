import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session';

const initialState = [];

const sessionErrorsReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return initialState;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default sessionErrorsReducer;
