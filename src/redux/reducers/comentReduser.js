import * as TYPES from '../types/sendTarps.js';

function comentReduser(state = '', action) {
  switch (action.type) {
    case TYPES.ADD_COMENT:
      return action.payload;
    default:
      return state
  }
}

export default comentReduser;
