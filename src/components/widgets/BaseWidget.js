import React, {Component} from 'react';
import {Alert} from 'react-elemental';
import PropTypes from 'prop-types';

class BaseWidget extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      type: 'success'
    };
  }
  
  render(){
      const {children, type, ...other} = this.props;
      debugger;
      return (
         <div>
           {children}
           </div>
       );
  }
} 
BaseWidget.propTypes = {
  children: PropTypes.array,
  message: PropTypes.string,
  type: PropTypes.string
};
export default BaseWidget;