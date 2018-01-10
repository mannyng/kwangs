import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//import localStorage from 'localStorage';
//import LoadingDots from './LoadingDots';
//{loading && <LoadingDots interval={100} dots={20}/>}
import { connect } from 'react-redux';



class SimpleHeader extends React.Component {

 
 render() {
  
 const activeStyle = { color: 'blue' };
 
 return (
  <div>
    
   
   <NavLink to="/jobs" activeStyle={activeStyle} key={2}>Available Jobs</NavLink>
   {' | '}
   <NavLink to="/about" activeStyle={activeStyle} key={3}>About</NavLink>
    {" | "}
   <NavLink to="/signout" activeStyle={activeStyle} key={4}>Sign Out</NavLink>
   {" | "}
   <NavLink to="/job-offerings" activeStyle={activeStyle} key={5}>Home page</NavLink>
   
   <h2 className="pull-right">Kwangs Work Network </h2>
          <p className="lead">
            Your one step to find daily pay job and workers
          </p>
          <hr />
  </div>
 );
}
}

SimpleHeader.propTypes = {
  loading: PropTypes.number
};
function mapStateToProps(state) {
  //debugger;
  return {
    loading: state.ajaxCallsInProgress
  };
}

export default connect(
  mapStateToProps
)(SimpleHeader);
//export default Header;
