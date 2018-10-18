import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

import * as actions from '../../actions/courses';
import CoursesList from './CourseList';

class Courses extends Component {
  itemsCountPerPage = 3

  state = {
    activePage: 1,
  }

  redirectToAddCoursePage = () => {
    const { history } = this.props;
    history.push('/courses/create');
  }

  deleteCourse = (id) => {
    const { deleteCourse } = this.props;
    deleteCourse(id);
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  }

  itemsSliceForCurrentPage = () => {
    const { activePage } = this.state;

    const start = (activePage - 1) * this.itemsCountPerPage;
    const end = start + this.itemsCountPerPage;
    return [start, end];
  }

  render() {
    const { courses } = this.props;
    const { activePage } = this.state;

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
            : (
              <Fragment>
                <CoursesList
                  courses={courses.slice(...this.itemsSliceForCurrentPage())}
                  deleteCourse={this.deleteCourse}
                />
                <Pagination
                  itemsCountPerPage={this.itemsCountPerPage}
                  totalItemsCount={courses.length}
                  pageRangeDisplayed={10}
                  onChange={this.handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                  activePage={activePage}
                />
              </Fragment>
            )
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
    courses: state.courses.sort((a, b) => a.title > b.title),
  }),
  dispatch => bindActionCreators(actions, dispatch),
)(Courses);
