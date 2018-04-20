import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Text} from 'react-elemental';

const MyProfile = ({myFriends,fr_message}) => {
  //debugger;
  return (
    <article  className="panel panel-info">
      <header className="panel-heading">
        <Text size="epsilon" bold color="rgb(62, 184, 240)">
          My Messages {' '} <span className="fa fa-envelope-o fa-lg"/>
        </Text>
      </header>
      <div className="panel-body"> 
    {myFriends && myFriends.map(mymessage =>
     (
        <Link to={'/connect/' + mymessage.username} key={mymessage.id}>
         {fr_message(mymessage.id,mymessage.username)}
         <hr />
        </Link> 
     )   
    )} </div>   
    </article>
    );
};

MyProfile.propTypes = {
  myFriends: PropTypes.array.isRequired, 
  fr_message: PropTypes.func.isRequired
};
export default MyProfile;