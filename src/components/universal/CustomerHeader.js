import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-elemental';
import { NavLink } from 'react-router-dom';
//import localStorage from 'localStorage';
//import LoadingDots from './LoadingDots';
//{loading && <LoadingDots interval={100} dots={20}/>}
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';
//import {fetchCustomerConnect} from '../../actions/customerProfilesActions';
import ASignin from '../auth/Asignin';


class Header extends React.Component {
 constructor(props, context) {
    super(props, context);
    
    this.state = {
      profile: {user_id: '', username:'', firstname:'', lastname:''},
      currentUser: { currentUser: 0},
      loading: 0,
      customerConnect: { customer_connect:  {}, friend: {}, customer:{} },
      searchTerm: "lagos",
      selectedValues:[]
    };
    //this.onClickAccept = this.onClickAccept.bind(this);
  }
  
 componentDidMount() {
    //debugger;
    if (this.props.currentUser) {
     //if(this.props.profile.myprofile.id) {
      //this.props.dispatch(fetchCustomerConnect(this.props.profile.myprofile.id));
     //}
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
  //const profile = this.props.profile;
  const {profile} = this.props;
  //debugger;
 const activeStyle = { color: 'blue' };
 //const mytoken = localStorage.getItem('token');
 //debugger;
 if (profile.status == 'ok'){
  //debugger;
 return (
  <div>
    
   <NavLink to="/" activeStyle={activeStyle} key={1}>Home page</NavLink>
    {" | "}
   <NavLink to="/jobs" activeStyle={activeStyle} key={2}>Available Jobs</NavLink>
   {' | '}
   <NavLink to="/about" activeStyle={activeStyle} key={3}>About</NavLink>
    {" | "}
    <NavLink to="/privacy_policy" activeStyle={activeStyle} key={6}>Privacy Policy</NavLink>
    {" | "}
   <NavLink to="/signout" activeStyle={activeStyle} key={4}>Sign Out</NavLink>
   {" | "}
   <NavLink to="/profile" activeStyle={activeStyle} key={5}>{profile.myprofile.username} Profile</NavLink>
  
   <Text className="pull-right" size="epsilon" bold color="rgb(62, 184, 240)">
   Kwangs Work Network 
   </Text>
        
          <Text bold color="rgb(62, 184, 240)">
            Your one step to find daily pay job and workers
          </Text>
         
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
      <NavLink to="/privacy_policy" activeStyle={activeStyle} key={6}>Privacy Policy</NavLink>
      {" | "}
     <NavLink to="/signin" activeStyle={activeStyle} key={4}>Sign In</NavLink>
      {" | "}
     <NavLink to="/signup" activeStyle={activeStyle} key={5}>Sign Up</NavLink>
    </div>
    <div className="col-md-2"/>
    <div className="col-md-4 col-xs-6">
       <small> <ASignin /></small>
    </div>
   </div>  
   <div>
     <Text className="pull-right" size="epsilon" bold color="rgb(62, 184, 240)">
      Kwangs Work Network 
     </Text>
     <Text bold color="rgb(62, 184, 240)">
      Your one step to find daily pay job and workers
     </Text>
    <hr />
  </div>

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
