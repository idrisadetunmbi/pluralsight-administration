import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions/authors';
import AuthorsList from './AuthorsList';

class Authors extends Component {
  redirectToAddAuthorPage = () => {
    const { history } = this.props;
    history.push('/authors/create');
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
        <AuthorsList authors={authors} courses={courses} />
      </div>
    );
  }
}

Authors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(
  state => ({
    authors: state.authors,
    courses: state.courses,
  }),
  dispatch => bindActionCreators(actions, dispatch),
)(Authors);
