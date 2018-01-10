import React from 'react';
import PropTypes from 'prop-types';

const JobOfferingsTextInput = ({name, value, placeholder, onChange, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }
  return (
    <div className={wrapperClass}>
      <div className="field">
    <input
      className="form-control"
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}/>
      {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

const { string, func, number, oneOfType } = PropTypes;

JobOfferingsTextInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: oneOfType([
    string,
    number
  ]),
  error: PropTypes.string
};

export default JobOfferingsTextInput;
