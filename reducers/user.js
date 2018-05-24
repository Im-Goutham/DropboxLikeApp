import {
  SAVE_USER, CHANGE_CONNECTION_STATUS
} from '../actions/types.js';

const INITIAL_STATE = {
  user: {},
  isConnected: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER:
      return  Object.assign({}, state, {user: action.payload});
    case CHANGE_CONNECTION_STATUS:
      return  Object.assign({}, state, {isConnected: action.payload});
    default:
      return state;
  }
}
