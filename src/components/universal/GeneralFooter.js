import React,{Component} from 'react';
//import PropTypes from 'prop-types';
import { Text } from 'react-elemental';
import { NavLink } from 'react-router-dom';

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
   <NavLink to="/about" activeStyle={activeStyle} key={2}>About the App</NavLink>
   </div>
   <hr/>
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


export default GeneralFooter;
//export default Header;
