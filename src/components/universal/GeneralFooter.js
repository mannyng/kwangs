import React,{Component} from 'react';
//import PropTypes from 'prop-types';
//import { Link, IndexLink } from 'react-router';
import { NavLink } from 'react-router-dom';
//import localStorage from 'localStorage';
//import LoadingDots from './LoadingDots';
//{loading && <LoadingDots interval={100} dots={20}/>}
//import { connect } from 'react-redux';
//import * as actions from '../../actions/customerProfilesActions';

class GeneralFooter extends Component {
 
 //componentDidMount() {
  //  debugger;
   // if (this.props.currentUser) {
   // this.props.dispatch(actions.fetchCustomerProfiles(this.props.currentUser));
   // }
  //}
 
 render() {
  
 const activeStyle = { color: 'blue' };
 
  return (
  <div>
  <div className="pull-right">
   <NavLink to="/" activeStyle={activeStyle} key={1}>Home</NavLink>
    {" | "}
   <NavLink to="/job-offerings" activeStyle={activeStyle} key={2}>Job Offering App</NavLink>
   {" | "}
   <NavLink to="/about" activeStyle={activeStyle} key={3}>About</NavLink>
    {" | "}
   </div>
   <hr/>
   <h3>Kwangs Work Network </h3>
          <p className="lead">
            Your one step to find daily pay job and workers
          </p>
          <hr />
  </div>
 );
}
}


export default GeneralFooter;
//export default Header;
