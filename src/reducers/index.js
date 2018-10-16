import { combineReducers } from 'redux';

import courses from './courses';
import authors from './authors';
import apiCallsInProgressCount from './apiCallsInProgressCount';

export default combineReducers({
  courses,
  authors,
  apiCallsInProgressCount,
});
