import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    case actionTypes.UPDATE_COURSE_SUCCESS:
      return state.map((course) => {
        if (course.id === action.course.id) return action.course;
        return course;
      });
    default:
      return state;
  }
};
