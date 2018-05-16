import {
  SHOW_MODAL
} from '../actions/types.js';

const INITIAL_STATE = {
  createModal: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { createModal: !state.createModal };
    default:
      return state;
  }
}
