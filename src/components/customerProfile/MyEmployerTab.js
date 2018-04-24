import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import MyProfile from './MyProfile';
import MyJobs from './MyJobs';
import MyConnections from './MyConnections';
import MyFriends from './MyFriends';

const MyEmployerTab = ({actions,customerConnect,profile,myJobs,isOpen,currentUser,myFriends, fr_message}) => {
    //debugger;
    return (
        <Tabs>
           <Tab label="Connections"><MyConnections actions={actions} customerConnect={customerConnect}
            currentUser={currentUser}  isOpen={isOpen} /></Tab>
            
            {profile.myprofile.customer_type == 'employer' &&
            <Tab label="My Jobs"><MyJobs myJobs={myJobs}/></Tab>
            }
            
            <Tab label="Profile"><MyProfile profile={profile.myprofile}/></Tab>
            <Tab label="Messages"><MyFriends myFriends={myFriends}
             fr_message={fr_message} /></Tab>
        </Tabs>
        
    );
};

MyEmployerTab.propTypes = {
  myFriends: PropTypes.array.isRequired, 
  fr_message: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  currentUser: PropTypes.number,
  customerConnect: PropTypes.array,
  myJobs: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default MyEmployerTab;