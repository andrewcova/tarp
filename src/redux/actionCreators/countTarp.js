import * as TYPES from '../types/sendTarps';

export function countTarp(num) {
  return {
    type: TYPES.COUNT_TARP,
    payload: num
  }
}
