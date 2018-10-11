import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    {' | '}
    <NavLink to="/courses">Courses</NavLink>
    {' | '}
    <NavLink to="/about">About</NavLink>
  </nav>
);
