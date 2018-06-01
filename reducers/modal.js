import {
  SHOW_MODAL,CHANGE_VIEW
} from '../actions/types.js';

const INITIAL_STATE = {
  createModal: false,
  viewType: 'list'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return  Object.assign({}, state, {createModal: action.payload});
    case CHANGE_VIEW:
      return  Object.assign({}, state, {viewType: action.payload});
    default:
      return state;
  }
}
