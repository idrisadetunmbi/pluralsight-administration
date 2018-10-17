import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from '../common';

const AuthorForm = ({
  author, onSave, onChange, saving, errors,
}) => (
  <form>
    <h1>Manage Author</h1>
    <TextInput
      name="firstName"
      label="First Name"
      value={author.firstName}
      onChange={onChange}
      error={errors.firstName}
    />

    <TextInput
      name="lastName"
      label="Last Name"
      value={author.lastName}
      onChange={onChange}
      error={errors.lastName}
    />

    <input
      type="submit"
      disabled={saving}
      value={saving ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      onClick={onSave}
    />
  </form>
);

AuthorForm.propTypes = {
  author: PropTypes.shape().isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.shape().isRequired,
};

export default AuthorForm;
