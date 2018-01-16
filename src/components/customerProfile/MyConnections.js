import React from 'react';
import PropTypes from 'prop-types';
import MyConnection from './MyConnection';


const MyConnections = ({customerConnect,currentUser,actions,isOpen}) => {
  //debugger;
  return(
      <div>
         <h1>Connect Requests</h1>
         <div className="row">
         {customerConnect && customerConnect.map(myconnection =>
          <MyConnection key={myconnection.customer_connect.id} myconnection={myconnection} actions={actions} currentUser={currentUser} isOpen={isOpen}/>
         )}
        </div>
      </div>
      );  
};

MyConnections.propTypes = {
    customerConnect: PropTypes.array,
    myconnection: PropTypes.object,
    currentUser: PropTypes.number.isRequired,
    actions: PropTypes.object,
    isOpen: PropTypes.bool,
};
export default MyConnections;