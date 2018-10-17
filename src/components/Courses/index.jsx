import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions/courses';
import CoursesList from './CourseList';

class Courses extends Component {
  redirectToAddCoursePage = () => {
    const { history } = this.props;
    history.push('/courses/create');
  }

  deleteCourse = (id) => {
    const { deleteCourse } = this.props;
    deleteCourse(id);
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
        {
          courses.length === 0
            ? <p className="font-weight-bold">There are currently no courses available</p>
            : <CoursesList courses={courses} deleteCourse={this.deleteCourse} />
        }
      </div>
    );
  }
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteCourse: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(
  state => ({
    courses: state.courses,
  }),
  dispatch => bindActionCreators(actions, dispatch),
)(Courses);
