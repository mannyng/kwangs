import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Text} from 'react-elemental';

const MyProfile = ({profile}) => {
  
  return (
    <article  className="panel panel-info">
      <header className="panel-heading">
        <Text size="epsilon" bold color="rgb(62, 184, 240)">
          My Messages {' '} <span className="fa fa-envelope-o fa-lg"/>
        </Text>
      </header>
      <div>{' '}</div>
    {profile.mymessages && profile.myconv.map(mymessage =>
     (<div key={mymessage.id}>
     {mymessage.messagas.length > 0 &&
     <div  className="row">
        <div className="col-xs-6">
        <Link to={'/connect/' + mymessage.sender.username}>
         <Text size="large" bold>
          {mymessage.sender.username}
         </Text>
        </Link> 
        </div>
        <div className="col-xs-1"/>
        <div className="col-xs-5">
          
            <Link to={'/connect/' + mymessage.sender.username}>
             <div  className="row">
              
               <div className="col-xs-4">
               <Text size="large" bold>
               {mymessage.messagas.length + 1}{' '}
               </Text>
               </div>
               <div className="col-xs-4">
               
                {mymessage.messagas.length > 1 && <Text size="large">Messages</Text>}
                {mymessage.messagas.length === 1 && <Text size="large">Message</Text>}
               
                </div> 
                <div className="col-xs-2"/>
                
             </div>    
             </Link>
             
        </div>       
    </div>
     }
     </div>)   
    )}    
    </article>
    );
};

MyProfile.propTypes = {
    profile: PropTypes.object.isRequired
};
export default MyProfile;