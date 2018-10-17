import * as actionTypes from './actionTypes';
import courseApi from '../apiMocks/courses';
import { addApiCallInProgress } from './apiCallStatus';

export const loadCourses = () => async (dispatch) => {
  dispatch(addApiCallInProgress());
  const courses = await courseApi.getAllCourses();
  dispatch({ type: actionTypes.LOAD_COURSES_SUCCESS, courses });
};

export const saveCourse = course => async (dispatch) => {
  dispatch(addApiCallInProgress());
  const savedCourse = await courseApi.saveCourse(course);
  const action = {
    type: course.id ? actionTypes.UPDATE_COURSE_SUCCESS : actionTypes.CREATE_COURSE_SUCCESS,
    course: savedCourse,
  };
  dispatch(action);
};

export const deleteCourse = id => async (dispatch) => {
  dispatch(addApiCallInProgress());
  await courseApi.deleteCourse(id);
  dispatch({ type: actionTypes.DELETE_COURSE_SUCCESS });
  dispatch(loadCourses());
};
