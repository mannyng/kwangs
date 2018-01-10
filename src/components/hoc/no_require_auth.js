import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import * as actions from '../../actions/authActions';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/jobs');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/jobs');
      }
    }


    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  

  NotAuthentication.propTypes = {
      router: PropTypes.object,
      //profile: PropTypes.object.isRequired,
      //currentUser: PropTypes.number.isRequired,
      authenticated: PropTypes.bool,
      history: PropTypes.object.isRequired
  };
    
  function mapStateToProps(state) {
    return { 
     // profile: state.profile,
     // currentUser: state.currentUser.currentUser,
      authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(NotAuthentication);
}