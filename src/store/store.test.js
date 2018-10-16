import { createStore } from 'redux';
import rootReducer from '../reducers';
import * as actionTypes from '../actions/actionTypes';

describe('Store', () => {
  it('should handle creating courses', () => {
    const store = createStore(rootReducer);
    const course = { title: 'A' };

    store.dispatch({ type: actionTypes.CREATE_COURSE_SUCCESS, course });
    const expected = store.getState().courses[0];

    expect(expected).toEqual(course);
  });
});
