import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;
    default:
      return state;
  }
};
