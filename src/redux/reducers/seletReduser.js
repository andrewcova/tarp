import * as TYPES from '../types/sendTarps.js';

function selectReduser(state = '', action) {
  switch (action.type) {
    case TYPES.SELECT_TARP:
      return action.payload;
    default:
      return state
  }
}

export default selectReduser;
