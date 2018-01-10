import React from 'react';
import PropTypes from 'prop-types';
import MyConnection from './MyConnection';


const MyConnections = ({customerConnect,currentUser,actions,isOpen,onModalOpen}) => {
  debugger;
  return(
      <div>
         <h1>Connect Requests</h1>
         <div className="row">
         {customerConnect && customerConnect.map(myconnection =>
          <MyConnection key={myconnection.customer_connect.id} myconnection={myconnection} 
           actions={actions} currentUser={currentUser} onModalOpen={onModalOpen} isOpen={isOpen}/>
         )}
        </div>
      </div>
      );  
};

MyConnections.propTypes = {
    myconnection: PropTypes.object
};
export default MyConnections;