import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-elemental';
import Modal from 'react-modal';
//import AModal from 'react-modal';

  
const MyConnection = ({myconnection,currentUser,actions,isOpen}) => {
  function toggleOpenModal(){
    actions.messageModalOpen(); 
  }
  function atoggleOpenModal(){
    actions.messageModalOpen(); 
  }
  function toggleCloseModal(){
    actions.messageModalClose(); 
  }
  
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
         <div className="col-md-8">
         <div className="row">
         <div className="col-md-2">{myconnection.friend && myconnection.friend.username}</div>
         <div className="col-md-8">{myconnection.customer_connect.msg} </div>
         </div>
          <div className="row">
          <div className="col-md-5">
           <Button onClick={onClickAccept}>
           Accept Connection
           <span className="fa fa-handshake-o fa-lg fa-pull-right"/>
         </Button>
         </div>
         <div className="col-md-2"/>
         
         <div className="col-md-5">
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
            <div className="col-md-5"><h3 className="bold">{myconnection.friend && myconnection.friend.username}</h3></div>
             <div className="col-md-1"/>
            <div className="col-md-6">
            <Button onClick={toggleOpenModal}>
                 Contact
                <span className="fa fa-cut fa-lg fa-pull-right"/>
              </Button> 
              OR
              <Button onClick={onClickAccept}>
                 Block
                <span className="fa fa-cut fa-lg fa-pull-right"/>
              </Button>
             
            </div>
         </div>}
         </div>}
         {myconnection.customer_connect.state == "accepted" &&
         <div>
         {!notcustomer &&
           <div className="row">
            <div className="col-md-5"><h3 className="bold">{myconnection.customer && myconnection.customer.username}</h3></div>
             <div className="col-md-1"/>
            <div className="col-md-6">
              <Button onClick={atoggleOpenModal}>
                 Contact
                <span className="fa fa-cut fa-lg fa-pull-right"></span>
              </Button> 
              OR
              <Button onClick={onClickAccept}>
                 Block
                <span className="fa fa-cut fa-lg fa-pull-right"></span>
              </Button>
            </div>
         </div>}
         </div>}
          <Modal
          isOpen={isOpen}
          onRequestClose={toggleCloseModal}
         ariaHideApp={false}
          contentLabel="Example Modal">
          <h2>Hello {myconnection.friend.username || myconnection.customer.username} </h2>
          <button onClick={toggleCloseModal}>close</button>
          <div>I am a modal</div>
        </Modal>
        </div>
        </div>
    );
};

MyConnection.propTypes = {
    myconnection: PropTypes.object.isRequired,
    currentUser: PropTypes.number.isRequired,
    actions: PropTypes.func,
    isOpen: PropTypes.bool,
    
};
export default MyConnection;