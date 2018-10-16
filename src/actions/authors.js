import AuthorApi from '../apiMocks/authors';
import * as types from './actionTypes';
import { addApiCallInProgress } from './apiCallStatus';

export const loadAuthors = () => async (dispatch) => {
  dispatch(addApiCallInProgress());
  const authors = await AuthorApi.getAllAuthors();
  dispatch({ type: types.LOAD_AUTHOR_SUCCESS, authors });
};

export const todo = () => {
  // todo:
};
