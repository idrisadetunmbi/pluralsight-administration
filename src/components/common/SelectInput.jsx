import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({
  name, label, onChange, defaultOption, value, error, options, onBlur,
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="field">
      <select
        name={name}
        className="form-control"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">{defaultOption}</option>
        {
          options.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.text}
            </option>))
        }
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
);

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onBlur: PropTypes.func,
};

SelectInput.defaultProps = {
  onBlur: null,
};

export default SelectInput;
