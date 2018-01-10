import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class ASignin extends Component {
  submit = (values) => {
    this.props.signinUser(values, this.props.history);
  }

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
     
        <div className="form">  
          <form onSubmit={handleSubmit(this.submit)}>
            <Field name="email"
                  component="input"
                  type="text"
                  placeholder="Email" 
            />
            <Field name="password" 
                  component="input"
                  type="password" 
                  placeholder="Password" 
            />
            <button type="submit" className="blue">Sign In</button>
          </form>
        </div>
    );
  }
}

ASignin.propTypes = {
  signinUser: PropTypes.func.isRequired,
  history: PropTypes.object,
  errorMessage: PropTypes.string,
  handleSubmit:PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormASignin = reduxForm({
  form: 'signin'
})(ASignin);

export default connect(mapStateToProps, actions)(reduxFormASignin);

