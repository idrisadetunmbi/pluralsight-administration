import reducer from './courses';
import * as actionTypes from '../actions/actionTypes';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    const newState = reducer([],
      {
        type: actionTypes.CREATE_COURSE_SUCCESS,
        course: { title: 'A' },
      });
    expect(newState.length).toEqual(1);
    expect(newState[0].title).toEqual('A');
  });
});
