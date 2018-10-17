import React from 'react';
import PropTypes from 'prop-types';

import Author from './Author';

const AuthorsList = ({ authors, courses, deleteAuthor }) => (
  <table className="table">
    <thead>
      <tr>
        <th>id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>#Courses</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {
        authors.map(author => (
          <Author
            key={author.id}
            author={author}
            noOfCourses={courses.filter(course => course.authorId === author.id).length}
            deleteAuthor={deleteAuthor}
          />
        ))
      }
    </tbody>
  </table>
);

AuthorsList.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteAuthor: PropTypes.func.isRequired,
};

export default AuthorsList;
