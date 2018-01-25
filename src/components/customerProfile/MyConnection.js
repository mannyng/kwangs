import React from 'react';
import PropTypes from 'prop-types';
import {Button,Text} from 'react-elemental';
import { Link } from 'react-router-dom';
//import Modal from 'react-modal';
//import AModal from 'react-modal';

//isOpen  
const MyConnection = ({myconnection,currentUser,actions}) => {
  //function toggleOpenModal(){
  //  actions.messageModalOpen(); 
  //}
  //function toggleCloseModal(){
   // actions.messageModalClose(); 
 // }
  
  function onClickAccept() {
    //debugger;
    actions.acceptCustomerConnect(myconnection.customer_connect.id,myconnection.customer_connect.customer_id);
    alert(`Accepting ${myconnection.friend.username} to you network`);
  }
  
  //debugger;
  const friend = myconnection.friend.user_id == currentUser;
  const notcustomer = myconnection.customer.user_id == currentUser;
  return (
      <div>
        <div className="row" key={myconnection.customer_connect.id}>
         
         
         {myconnection.customer_connect.state == "pending" &&
         <div className="col-xs-8">
         <div className="row">
         <div className="col-xs-2">{myconnection.friend && myconnection.friend.username}</div>
         <div className="col-xs-8">{myconnection.customer_connect.msg} </div>
         </div>
          <div className="row">
          <div className="col-xs-5">
           <Button onClick={onClickAccept}>
           Accept Connection
           <span className="fa fa-handshake-o fa-lg fa-pull-right"/>
         </Button>
         </div>
         <div className="col-xs-2"/>
         
         <div className="col-xs-5">
         <Button onClick={onClickAccept}>
           Reject Connection
           <span className="fa fa-battery-empty fa-lg fa-pull-right"/>
         </Button>
         </div>
         </div>
         </div>}
          {myconnection.customer_connect.state == "accepted" && 
         <div>
         {!friend &&
           <div className="row">
            <div className="col-xs-5"><Text size="large" bold>{myconnection.friend && myconnection.friend.username}</Text></div>
             <div className="col-xs-1"/>
            <div className="col-xs-6">
            <Button>
                <Link to={'/connect/' + myconnection.friend.username}>Contact{' '}
                <span className="fa fa-envelope-o fa-lg fa-pull-right"/>
                </Link>
              </Button> 
              OR
              <Button onClick={onClickAccept}>
                 Block
                <span className="fa fa-cut fa-lg fa-pull-right"/>
              </Button>
             
            </div><hr />
         </div>}
         </div>}
         {myconnection.customer_connect.state == "accepted" &&
         <div>
         {!notcustomer &&
           <div className="row">
            <div className="col-xs-5"><Text size="large" bold>{myconnection.customer && myconnection.customer.username}</Text></div>
             <div className="col-xs-1"/>
            <div className="col-xs-6">
              <Button>
                 <Link to={'/connect/' + myconnection.customer.username}>Contact{' '}
                <span className="fa fa-envelope-o fa-lg fa-pull-right"/>
                </Link>
              </Button> 
              OR
              <Button onClick={onClickAccept}>
                 Block
                <span className="fa fa-cut fa-lg fa-pull-right"/>
              </Button>
            </div><hr />
         </div>}
         </div>}
         
        </div>
        </div>
    );
};

MyConnection.propTypes = {
    myconnection: PropTypes.object.isRequired,
    currentUser: PropTypes.number.isRequired,
    actions: PropTypes.object,
    //isOpen: PropTypes.bool,
    
};
export default MyConnection;