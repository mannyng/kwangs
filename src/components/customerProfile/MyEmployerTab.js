import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import MyProfile from './MyProfile';
import MyJobs from './MyJobs';
import MyConnections from './MyConnections';


const MyEmployerTab = ({actions,customerConnect,profile,myJobs,isOpen,currentUser}) => {
    //debugger;
    return (
        <Tabs>
           <Tab label="Connections"><MyConnections actions={actions} customerConnect={customerConnect}
            currentUser={currentUser}  isOpen={isOpen} /></Tab>
            
            {profile.myprofile.customer_type == 'employer' &&
            <Tab label="My Jobs"><MyJobs myJobs={myJobs}/></Tab>
            }
            
            <Tab label="Profile"><MyProfile profile={profile}/></Tab>
            
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