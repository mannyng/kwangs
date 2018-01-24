import React from 'react';
import PropTypes from 'prop-types';
//import { Link, IndexLink } from 'react-router';
import { NavLink } from 'react-router-dom';
//import localStorage from 'localStorage';
//import LoadingDots from './LoadingDots';
//{loading && <LoadingDots interval={100} dots={20}/>}
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';
import {fetchCustomerConnect} from '../../actions/customerProfilesActions';
import ASignin from '../auth/Asignin';

class Header extends React.Component {
 constructor(props, context) {
    super(props, context);
    
    this.state = {
      profile: {user_id: '', username:'', firstname:'', lastname:''},
      currentUser: { currentUser: 0},
      loading: 'false',
      customerConnect: { customer_connect:  {}, friend: {}, customer:{} }
    };
    //this.onClickAccept = this.onClickAccept.bind(this);
  }
  
 componentDidMount() {
    //debugger;
    if (this.props.currentUser) {
     this.props.dispatch(fetchCustomerConnect(this.props.currentUser));
    this.props.dispatch(actions.fetchCustomerProfiles(this.props.currentUser));
    
    }
  }
  shouldComponentUpdate(nextProps) {
     //debugger;
        const differentUser = this.props.currentUser !== nextProps.currentUser;
        const differenSecureJob = this.props.secureJobs.length !== nextProps.secureJobs.length;
        const differenConnect = this.props.customerConnect.length !== nextProps.customerConnect.length;        
        //const differentProfile = this.props.profile.myprofile.id !== nextProps.profile.myprofile.id;
        const differentProfile = this.props.profile.status !== nextProps.profile.status;
        return differentUser || differenConnect || differentProfile || differenSecureJob;
    }
 
 render() {
  const profile = this.props.profile;
  //debugger;
 const activeStyle = { color: 'blue' };
 //const mytoken = localStorage.getItem('token');
 //debugger;
 if (profile.status == 'ok'){
  debugger;
 return (
  <div>
    
   <NavLink to="/profile" activeStyle={activeStyle} key={1}>{profile.myprofile.username}</NavLink>
    {" | "}
   <NavLink to="/jobs" activeStyle={activeStyle} key={2}>Available Jobs</NavLink>
   {' | '}
   <NavLink to="/about" activeStyle={activeStyle} key={3}>About</NavLink>
    {" | "}
   <NavLink to="/signout" activeStyle={activeStyle} key={4}>Sign Out</NavLink>
   {" | "}
   <NavLink to="/home" activeStyle={activeStyle} key={5}>Home page</NavLink>
   
   <h2 className="pull-right">Kwangs Work Network </h2>
          <p className="lead">
            Your one step to find daily pay job and workers
          </p>
          <hr />
  </div>
 );
 }else{
  return (
  <div>
    <div className="row">
    <div className="col-md-6 col-xs-6">
   <NavLink to="/" activeStyle={activeStyle} key={1}>Home</NavLink>
    {" | "}
   <NavLink to="/about" activeStyle={activeStyle} key={3}>About</NavLink>
    {" | "}
   <NavLink to="/signin" activeStyle={activeStyle} key={4}>Sign In</NavLink>
   {" | "}
   <NavLink to="/signup" activeStyle={activeStyle} key={5}>Sign Up</NavLink>
   </div>
   
    <div className="col-md-6 col-xs-6">
       <small> <ASignin /></small>
    </div>
    
  </div>  
   
   <h3 className="pull-right">Kwangs Work Network </h3>
   
          <p className="lead">
            Your one step to find daily pay job and workers
          </p>
 
     
        
          <hr />
  </div>
 );
 }
}
}
Header.propTypes = {
 profile: PropTypes.object.isRequired,
 dispatch: PropTypes.func,
 currentUser: PropTypes.number,
  loading: PropTypes.number,
  secureJobs: PropTypes.array.isRequired,
  customerConnect: PropTypes.array.isRequired,
  myJobOffer: PropTypes.object.isRequired,
  myJobInsight: PropTypes.object.isRequired,
  myJobLocation: PropTypes.object.isRequired,
  myJobs: PropTypes.array.isRequired
};
function mapStateToProps(state) {
  //debugger;
  return {
   secureJobs: state.secureJobs,
   currentUser: state.currentUser.currentUser,
    loading: state.ajaxCallsInProgress,
    profile: state.profile,
    customerConnect: state.customerConnect,
    myJobOffer: state.myJobOffer.myJobOffer,
    myJobInsight: state.myJobInsight.myJobInsight,
    myJobLocation: state.myJobLocation.myJobLocation,
    myJobs: state.myJobs
  };
}

export default connect(
  mapStateToProps
)(Header);
//export default Header;
