import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';

import * as actions from '../../actions/courses';
import CourseForm from './CourseForm';

class ManageCourse extends Component {
  state = {
    errors: {},
    course: this.props.course || { // eslint-disable-line
      id: '',
      watchRef: '',
      title: '',
      authorId: '',
      length: '',
      category: '',
    },
    saving: false,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.course && props.course.id !== state.course.id) {
      return { course: props.course };
    }
    return null;
  }

  updateCourseState = (event) => {
    const { course } = this.state;
    this.setState({
      course: {
        ...course, [event.target.name]: event.target.value,
      },
    });
  }

  courseFormIsValid = () => {
    let formIsValid = true;
    const errors = {};
    const { course: { title } } = this.state;
    if (title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }
    this.setState({ errors });
    return formIsValid;
  }

  saveCourse = (event) => {
    event.preventDefault();

    if (!this.courseFormIsValid()) return;

    this.setState({ saving: true });
    const { saveCourse, history } = this.props;
    const { course } = this.state;
    saveCourse(course).then(() => {
      toastr.success('Course saved');
      this.setState({ saving: false });
      history.push('/courses');
    });
  }

  render() {
    const { errors, course, saving } = this.state;
    const { authors } = this.props;
    return (
      <CourseForm
        errors={errors}
        allAuthors={authors}
        course={course}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        loading={saving}
      />
    );
  }
}

ManageCourse.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(
  (state, ownProps) => ({
    course: state.courses.find(course => course.id === ownProps.match.params.id),
    authors: state.authors.map(author => ({
      value: author.id, text: `${author.firstName} ${author.lastName}`,
    })),
  }),
  dispatch => bindActionCreators(actions, dispatch),
)(ManageCourse);