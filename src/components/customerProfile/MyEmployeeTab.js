import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import MyProfile from './MyProfile';
//import MyJobs from './MyJobs';
import MyConnections from './MyConnections';


const MyEmployeeTab = ({actions,customerConnect,profile,isOpen,currentUser}) => {   
    //debugger;
    return (
        <Tabs>
           <Tab label="Connections"><MyConnections actions={actions} customerConnect={customerConnect}
            currentUser={currentUser}  isOpen={isOpen} /></Tab>
            
            
            
            <Tab label="Profile"><MyProfile profile={profile.myprofile}/></Tab>
            
        </Tabs>
        
    );
};

MyEmployeeTab.propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  currentUser: PropTypes.number,
  customerConnect: PropTypes.array,
  isOpen: PropTypes.bool.isRequired
};

export default MyEmployeeTab;