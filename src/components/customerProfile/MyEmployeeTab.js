import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import MyProfile from './MyProfile';
import MyReqJobs from './MyReqJobs';
import MyConnections from './MyConnections';
import MyFriends from './MyFriends';

const MyEmployeeTab = ({actions,customerConnect,profile,isOpen,myJobs,currentUser}) => {   
    //debugger;
    return (
        <Tabs>
           <Tab label="Connections"><MyConnections actions={actions} customerConnect={customerConnect}
            currentUser={currentUser}  isOpen={isOpen} /></Tab>
           {profile.myprofile.customer_type == 'employee' &&
            <Tab label="My Jobs"><MyReqJobs myJobs={myJobs} profile={profile}/></Tab>
            }
            <Tab label="Profile"><MyProfile profile={profile.myprofile}/></Tab>
            <Tab label="Messages"><MyFriends profile={profile}/></Tab>
        </Tabs>
        
    );
};

MyEmployeeTab.propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  myJobs: PropTypes.array,
  currentUser: PropTypes.number,
  customerConnect: PropTypes.array,
  isOpen: PropTypes.bool.isRequired
};

export default MyEmployeeTab;