import AuthorApi from '../apiMocks/authors';
import * as types from './actionTypes';
import { addApiCallInProgress } from './apiCallStatus';

export const loadAuthors = () => async (dispatch) => {
  dispatch(addApiCallInProgress());
  const authors = await AuthorApi.getAllAuthors();
  dispatch({ type: types.LOAD_AUTHOR_SUCCESS, authors });
};

export const saveAuthor = author => async (dispatch) => {
  dispatch(addApiCallInProgress());
  const savedAuthor = await AuthorApi.saveAuthor(author);
  const action = {
    type: author.id ? types.UPDATE_AUTHOR_SUCCESS : types.CREATE_AUTHOR_SUCCESS,
    author: savedAuthor,
  };
  dispatch(action);
};

export const deleteAuthor = id => async (dispatch) => {
  dispatch(addApiCallInProgress());
  await AuthorApi.deleteAuthor(id);
  dispatch({ type: types.DELETE_AUTHOR_SUCCESS });
  dispatch(loadAuthors());
};
