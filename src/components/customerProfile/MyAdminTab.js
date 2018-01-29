import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import MyProfile from './MyProfile';
//import MyJobs from './MyJobs';
import CreateCampaign from './CreateCampaign';
import MyConnections from './MyConnections';
import MyFriends from './MyFriends';

const MyEmployerTab = ({actions,customerConnect,profile,isOpen,currentUser}) => {
    //debugger;
    return (
        <Tabs>
           <Tab label="Connections"><MyConnections actions={actions} customerConnect={customerConnect}
            currentUser={currentUser}  isOpen={isOpen} /></Tab>
            
            
            <Tab label="Add Campaigns"><CreateCampaign /></Tab>
            
            
            <Tab label="Profile"><MyProfile profile={profile}/></Tab>
            <Tab label="Messages"><MyFriends profile={profile}/></Tab>
        </Tabs>
        
    );
};

MyEmployerTab.propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  currentUser: PropTypes.number,
  customerConnect: PropTypes.array,
  myJobs: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default MyEmployerTab;