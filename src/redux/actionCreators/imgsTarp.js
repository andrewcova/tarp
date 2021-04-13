import * as TYPES from '../types/sendTarps';

export function imgsTarp(urlAray) {
  return {
    type: TYPES.IMGS_TARP,
    payload: urlAray
  }
}
