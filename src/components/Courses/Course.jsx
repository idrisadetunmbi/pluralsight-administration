import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Course = ({ course }) => (
  <tr>
    <td><a href={course.watchRef} rel="noopener noreferrer" target="_blank">Watch</a></td>
    <td><Link to={`/courses/${course.id}`}>{course.title}</Link></td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
    <td>{course.length}</td>
  </tr>
);

Course.propTypes = {
  course: PropTypes.shape().isRequired,
};

export default Course;
