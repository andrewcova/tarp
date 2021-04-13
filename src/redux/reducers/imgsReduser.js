import * as TYPES from '../types/sendTarps.js';

function imgsReduser(state = [], action) {
  switch (action.type) {
    case TYPES.IMGS_TARP:
      return action.payload;
    default:
      return state
  }
}

export default imgsReduser;
