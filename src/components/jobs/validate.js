const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.description) {
    errors.description = 'Required';
  }
  if (!values.employee_title) {
    errors.employee_title = 'Required';
  }
  if(!values.employee_category) {
    errors.employee_category = 'Required';
  }
  if(!values.employee_type) {
    errors.employee_type = 'Required';
  }
  if(!values.job_duration) {
    errors.job_duration = 'Required';
  }
  if(!values.pay_type) {
    errors.pay_type = 'Required';
  }
  if(!values.job_category) {
    errors.job_category = 'Required';
  }
  if(!values.employee_experience) {
    errors.employee_experience = 'Required';
  }
  if(!values.location) {
    errors.location = 'Required';
  }
  if(!values.city) {
    errors.city = 'Required';
  }
  if (!values.state) {
    errors.state = 'Required';
  }
  return errors;
};

export default validate;
