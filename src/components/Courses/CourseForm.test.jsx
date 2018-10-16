import React from 'react';
import { shallow } from 'enzyme';
import CourseForm from './CourseForm';

const setup = (additionalProps = {}) => {
  const props = {
    loading: false,
    course: {},
    errors: {},
    onSave: () => {},
    onChange: () => {},
    ...additionalProps,
  };
  return shallow(<CourseForm {...props} />);
};

describe('CourseForm', () => {
  test('renders form and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });
  
  test('save button is labelled "Save" when not saving', () => {
    const wrapper = setup();
    expect(wrapper.find('input').props().value).toBe('Save');
  });
  
  test('save button is labelled "Saving..." when saving', () => {
    const wrapper = setup({ loading: true });
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
