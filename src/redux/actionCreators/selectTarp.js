import * as TYPES from '../types/sendTarps';

export function selectTarp(num) {
  return {
    type: TYPES.SELECT_TARP,
    payload: num
  }
}
