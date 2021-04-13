import * as TYPES from '../types/sendTarps'

export function comentAdd(str) {
  return {
    type: TYPES.ADD_COMENT,
    payload: str
  }
}
