import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';


class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }
  componentWillUnmount(){
    //debugger;
    this.props.dispatch(actions.reset_current_user());
    this.props.dispatch(actions.reset_current_customer());
    this.props.dispatch(actions.reset_customer_connect());
    this.context.router.history.push('/');
  }
  
  handleOnLogout(nextState, replaceState) {
   //console.log('Clear your session here...');
   //debugger;
   this.props.dispatch(actions.reset_current_user());
  // debugger;
   replaceState({ nextPathname: nextState.location.pathname }, '/');
  }
  
  render() {
    return <div>Sorry to see you go... </div>;
  }
}

Signout.propTypes = {
  signoutUser: PropTypes.func.isRequired,
  dispatch: PropTypes.func
};
Signout.contextTypes = {
  router: PropTypes.object.isRequired
};
export default connect(null, actions)(Signout);