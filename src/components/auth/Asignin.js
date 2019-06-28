import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';
import toastr from 'toastr';

class ASignin extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      errors: {},
      saving: false
    };
  }
  submit = (values) => {
    this.setState({saving: true});
    //debugger;
    this.props.signinUser(values,this.context.router.history);
    
    //.then(() => this.redirect())
    //.catch(error => {
    //  toastr.error(error);
    //  this.setState({saving: false});
   // });
    
  }
  redirect() {
    //debugger;
    this.setState({saving: false});
      toastr.success('Logged In');
    this.context.router.push('/jobs');
  }
  sirenderAlert() {
    if (this.props.myerrorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.myerrorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    //debugger;
    return (
     
        <div className="row"> 
          <form onSubmit={handleSubmit(this.submit)}>
           <div className="form-group col-md-five">
            <Field name="email"
                  component="input"
                  type="text"
                  placeholder="Email" 
                  className="form-control"
                  error={this.state.errors}
            />
            </div>
            <div className="form-group col-md-five">
            <Field name="password" 
                  component="input"
                  type="password" 
                  placeholder="Password" 
                  className="form-control"
                  error={this.state.errors}
            />
            </div>
            <div className="form-group col-md-two">
            <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
          </form>
          
          {this.sirenderAlert()}
        </div>
    );
  }
}

ASignin.contextTypes = {
  router: PropTypes.object.isRequired
};

ASignin.propTypes = {
  signinUser: PropTypes.func.isRequired,
  history: PropTypes.object,
  myerrorMessage: PropTypes.string,
  handleSubmit:PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  //debugger;
  return { 
    myerrorMessage: state.auth.error,
    errors: state.auth.error
    
  };
}

const reduxFormASignin = reduxForm({
  form: 'signin'
})(ASignin);

export default connect(mapStateToProps, actions)(reduxFormASignin);

