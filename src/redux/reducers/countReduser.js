import * as TYPES from '../types/sendTarps.js';

function countReduser(state = '', action) {
  switch (action.type) {
    case TYPES.COUNT_TARP:
      return action.payload;
    default:
      return state
  }
}

export default countReduser;
