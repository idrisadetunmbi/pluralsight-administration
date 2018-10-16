import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions/courses';
import CoursesList from './CourseList';

class Courses extends Component {
  redirectToAddCoursePage = () => {

  }

  render() {
    const { courses } = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
          style={{ marginBottom: '1rem' }}
        />
        <CoursesList courses={courses} />
      </div>
    );
  }
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(
  state => ({
    courses: state.courses,
  }),
  dispatch => bindActionCreators(actions, dispatch),
)(Courses);
