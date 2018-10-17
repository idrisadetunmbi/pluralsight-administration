import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Author = ({ author, noOfCourses, deleteAuthor }) => (
  <tr>
    <td><Link to={`/authors/${author.id}`}>{author.id}</Link></td>
    <td>{author.firstName}</td>
    <td>{author.lastName}</td>
    <td>{noOfCourses}</td>
    <td>
      <button
        type="button"
        className="btn btn-sm btn-danger"
        onClick={() => deleteAuthor(author.id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

Author.propTypes = {
  author: PropTypes.shape().isRequired,
  noOfCourses: PropTypes.number.isRequired,
  deleteAuthor: PropTypes.func.isRequired,
};

export default Author;
