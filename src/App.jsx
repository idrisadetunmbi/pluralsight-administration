import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import { loadCourses } from './actions/courses';
import { loadAuthors } from './actions/authors';

import {
  Home, About, Nav, Courses, ManageCourse, Authors, ManageAuthor,
} from './components';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Route component={Nav} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/courses/create" component={ManageCourse} />
          <Route path="/courses/:id" component={ManageCourse} />
          <Route path="/courses" component={Courses} />
          <Route path="/authors/create" component={ManageAuthor} />
          <Route path="/authors/:id" component={ManageAuthor} />
          <Route path="/authors" component={Authors} />
          <Route path="/" component={Home} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>
);
