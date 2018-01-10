import React,{Component} from 'react';
//import PropTypes from 'prop-types';
//import { Link, IndexLink } from 'react-router';
//import { NavLink } from 'react-router-dom';
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
  
 //const activeStyle = { color: 'blue' };
 
  return (
  <div>
  <nav className="navbar navbar-default navbar-fixed-bottom">
 
        <div className="row"> 
          <div className="col-md-2 col-xs-2"></div>
          <div className="col-md-4 col-xs-4">Welcome to kwangala network</div>
          <div className="col-md-2 col-xs-2"></div>
          <div className="col-md-4 col-xs-4">&copy; 2017 kwangs.com.ng</div>
         </div>
         </nav>   
  </div>
 );
}
}


export default GeneralFooter;
//export default Header;
