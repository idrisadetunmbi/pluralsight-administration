import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import LoadingDots from '../common/Loading';

export default connect(state => ({
  loading: state.apiCallsInProgressCount > 0,
  courseCount: state.courses.length,
}))(({ loading, courseCount }) => (
  <nav>
    <NavLink to="/">Home</NavLink>
    {' | '}
    <NavLink to="/courses">
      Courses [
      {courseCount}
      ]
    </NavLink>
    {' | '}
    <NavLink to="/authors">Authors</NavLink>
    {' | '}
    <NavLink to="/about">About</NavLink>
    {loading && <LoadingDots interval={100} dots={20} />}
  </nav>
));
