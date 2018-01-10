import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import * as actions from '../../actions/authActions';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
      if (!this.props.profile) {
        this.props.history.push('/customerSignup');
      }
       //debugger;
      //if (this.props.profile.id == undefined){
        //if (this.props.profile.user_id ==0){   --> have to check this opttion too
      //debugger;
      // this.props.dispatch(actions.fetchCustomerProfiles(this.props.currentUser));
      //}
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/signin');
      }
      
       //if (this.props.profile.id == undefined){
      //debugger;
       //this.props.dispatch(actions.fetchCustomerProfiles(this.props.currentUser));
      // }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
    Authentication.propTypes = {
      router: PropTypes.object,
      authenticated: PropTypes.bool,
      history: PropTypes.object.isRequired,
      profile: PropTypes.object.isRequired,
      loading: PropTypes.number.isRequired,
      currentUser: PropTypes.number
    };
    
  function mapStateToProps(state) {
    //debugger;
    return { 
      profile: state.profile,
      currentUser: state.currentUser.currentUser,
      authenticated: state.auth.authenticated,
      loading: state.ajaxCallsInProgress
      };
  }

  return connect(mapStateToProps)(Authentication);
}