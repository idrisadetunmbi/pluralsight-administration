import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loadCourses } from './courses';
import * as actions from './actionTypes';

const mockStore = configureStore([thunk]);

describe('Courses thunk', () => {
  it('loadCourses calls the expected actions', (done) => {
    const store = mockStore({ courses: [] });
    store.dispatch(loadCourses()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).toEqual(actions.API_CALL_IN_PROGRESS);
      expect(dispatchedActions[1].type).toEqual(actions.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
