import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Home, About, Nav, Courses,
} from './components';


export default () => (
  <BrowserRouter>
    <Fragment>
      <Route component={Nav} />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/" component={Home} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
