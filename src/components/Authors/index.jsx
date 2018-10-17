import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';

import * as actions from '../../actions/authors';
import AuthorsList from './AuthorsList';

class Authors extends Component {
  redirectToAddAuthorPage = () => {
    const { history } = this.props;
    history.push('/authors/create');
  }

  deleteAuthor = (id) => {
    const { deleteAuthor, courses } = this.props;
    const countAuthorCourses = courses.filter(course => course.authorId === id).length;
    if (countAuthorCourses) {
      toastr.error('You can only delete an author with no courses');
      return;
    }
    deleteAuthor(id);
  }

  render() {
    const { authors, courses } = this.props;

    return (
      <div>
        <h1>Authors</h1>
        <input
          type="submit"
          value="Add Author"
          className="btn btn-primary"
          onClick={this.redirectToAddAuthorPage}
          style={{ marginBottom: '1rem' }}
        />
        <AuthorsList authors={authors} courses={courses} deleteAuthor={this.deleteAuthor} />
      </div>
    );
  }
}

Authors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  history: PropTypes.shape().isRequired,
  deleteAuthor: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    authors: state.authors,
    courses: state.courses,
  }),
  dispatch => bindActionCreators(actions, dispatch),
)(Authors);
