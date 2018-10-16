import * as types from '../actions/actionTypes';

export default (state = 0, action) => {
  if (action.type === types.API_CALL_IN_PROGRESS) return state + 1;
  if (action.type.endsWith('_SUCCESS')) return state - 1;
  return state;
};
