import React from "react";
import PropTypes from "prop-types";

import { Field } from "redux-form";

const renderRadioButton = props => {
  const {
    caption,
    radioButtonValue,
    handleChange,
    meta: { touched, error },
    ...field
  } = props;
  const _onChange = event => {
    //console.info("event", event.target.value);
    field.input.onChange(event);
    if (handleChange) {
      handleChange(event);
    }
  };
renderRadioButton.propTypes = {
  meta: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  radioButtonValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func
};
  let validationError = false;
  if (error && touched) {
    validationError = true;
  }
  return (
    <div className={"radio-button-" + name}>
      <input
        {...field.input}
        type="radio"
        value={radioButtonValue}
        key={"radio-button-" + radioButtonValue}
        onChange={_onChange}
        checked={radioButtonValue === field.input.value} // <----- THIS LINE
        className={(validationError && "requireViolation ") || ""}
      />
      <span
        className={
          ((validationError && "requireViolation ") || "") + "radio-button-text"
        }
      >
        {caption}
      </span>
    </div>
  );
};

let RadioButton = props => {
  return <Field {...props} component={renderRadioButton} />;
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  radioButtonValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  checked: PropTypes.bool
};

export default RadioButton;