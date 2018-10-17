import React from 'react';
import PropTypes from 'prop-types';

import Course from './Course';

const CoursesList = ({ courses, deleteCourse }) => (
  <table className="table">
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {
        courses.map(course => (
          <Course
            key={course.id}
            course={course}
            deleteCourse={deleteCourse}
          />
        ))
      }
    </tbody>
  </table>
);

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteCourse: PropTypes.func.isRequired,
};

export default CoursesList;
