import _ from 'underscore';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Prompt } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import * as actions from '../../actions/courses';
import CourseForm from './CourseForm';
import NoMatch from '../404';

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
    notFound: false,
    hasUnsavedChanges: false,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.course && props.course.id !== state.course.id) {
      return { course: props.course, notFound: false };
    }
    if (!props.course && props.match.params.id) {
      return { notFound: true };
    }
    return null;
  }

  updateCourseState = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      errors: { ...prevState.errors, [name]: '' },
      course: {
        ...prevState.course, [name]: value,
      },
      hasUnsavedChanges: true,
    }));
  }

  onBlurFormInput = (event) => {
    const { name } = event.target;
    const value = event.target.value.trim();
    switch (name) {
      case 'title':
      case 'category':
        if (value.length < 5) {
          this.setState(prevState => ({
            errors: {
              ...prevState.errors, [name]: `${name} must be at least 5 characters.`,
            },
          }));
        }
        break;
      case 'authorId':
        if (!value.length) {
          this.setState(prevState => ({
            errors: {
              ...prevState.errors, [name]: 'Please choose an author',
            },
          }));
        }
        break;
      case 'length':
        if (!value.length) {
          this.setState(prevState => ({
            errors: {
              ...prevState.errors, [name]: 'Please enter a valid course length',
            },
          }));
        }
        break;
      default:
        break;
    }
  }

  saveCourse = (event) => {
    event.preventDefault();
    const { errors } = this.state;
    if (!Object.values(errors).every(field => !field)) return;

    this.setState({ saving: true });
    const { saveCourse, history } = this.props;
    const { course } = this.state;
    saveCourse(course).then(() => {
      toastr.success('Course saved');
      this.setState({ saving: false, hasUnsavedChanges: false });
      history.push('/courses');
    });
  }

  render() {
    const {
      errors, course, saving, notFound, hasUnsavedChanges,
    } = this.state;
    const { authors } = this.props;
    if (notFound) return (<NoMatch />);
    return (
      <Fragment>
        <Prompt
          when={hasUnsavedChanges}
          message="You have unsaved changes, are you sure you want to leave?"
        />
        <CourseForm
          errors={errors}
          allAuthors={authors}
          course={course}
          onChange={this.updateCourseState}
          onBlur={this.onBlurFormInput}
          onSave={this.saveCourse}
          loading={saving}
        />
      </Fragment>
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
    course: ownProps.match.params.id
      ? state.courses.find(course => course.id === ownProps.match.params.id)
      : null,
    courses: state.courses,
    authors: state.authors.map(author => ({
      value: author.id, text: `${author.firstName} ${author.lastName}`,
    })),
  }),
  dispatch => bindActionCreators(actions, dispatch),
)(ManageCourse);
