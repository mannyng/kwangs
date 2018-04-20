import React,{Component} from 'react';
//import PropTypes from 'prop-types';
//import { Link, IndexLink } from 'react-router';
//import { NavLink } from 'react-router-dom';
//import localStorage from 'localStorage';
//import LoadingDots from './LoadingDots';
//{loading && <LoadingDots interval={100} dots={20}/>}
//import { connect } from 'react-redux';
//import * as actions from '../../actions/customerProfilesActions';
//import ChatFooter from './ChatFooter';

class GeneralFooter extends Component {
 
 //componentDidMount() {
  //  debugger;
   // if (this.props.currentUser) {
   // this.props.dispatch(actions.fetchCustomerProfiles(this.props.currentUser));
   // }
  //}
 
 render() {
  
 //const activeStyle = { color: 'blue' };
 //<div className="col-md-3 col-xs-3"><ChatFooter /></div>  the modal to be continued
  return (
  <div>
  
  <nav className="navbar navbar-default navbar-fixed-bottom">
 
        <div className="row"> 
          <div className="col-md-1 col-xs-1"/>
          <div className="col-md-3 col-xs-3">Welcome to kwangala network</div>
          <div className="col-md-2 col-xs-2"/>
          <div className="col-md-3 col-xs-3">&copy; 2017 kwanga.ml</div>
         </div>
         
         </nav>   
  </div>
 );
}
}


export default GeneralFooter;
//export default Header;
