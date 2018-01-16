import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Spinner} from 'react-elemental';

class WidgeHeader extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      loading: false
    };
  }
  
  render(){
      const {loading,children} = this.props;
      return (
         <h2>
          {children}
          {loading > 0 && <small style={{float: "right"}}><Spinner /></small>}
          </h2>
       );
  }
} 
WidgeHeader.propTypes = {
    children: PropTypes.string,
    loading: PropTypes.bool
};

export default WidgeHeader;