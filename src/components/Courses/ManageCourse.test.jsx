import React from 'react';
import { mount } from 'enzyme';
import ManageCourse from './ManageCourse';

describe('ManageCourse component', () => {
  const store = {
    getState: () => ({
      courses: [],
      authors: [],
    }),
    subscribe: () => {},
    dispatch: () => Promise.resolve(),
  };
  test('clicking save button with empty title updates state errors', () => {
    const wrapper = mount(<ManageCourse store={store} />);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('value')).toEqual('Save');
    saveButton.simulate('click');
    expect(wrapper.childAt(0).state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
