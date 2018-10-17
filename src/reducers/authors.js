import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;
    case types.CREATE_AUTHOR_SUCCESS:
      return [...state, { ...action.author }];
    case types.UPDATE_AUTHOR_SUCCESS:
      return state.map((author) => {
        if (author.id === action.author.id) return action.author;
        return author;
      });
    default:
      return state;
  }
};
