import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import Customers from './Customers';
//import MyJobs from './MyJobs';
import CreateCampaign from './CreateCampaign';
import MyConnections from './MyConnections';
import JobOffers from './JobOffers';
import JobRequests from './JobRequests';

const MyEmployerTab = ({actions,customerConnect,isOpen,currentUser}) => {
    //debugger;
    return (
        <Tabs>
           <Tab label="Connections"><MyConnections actions={actions} customerConnect={customerConnect}
            currentUser={currentUser}  isOpen={isOpen} /></Tab>
            
            
            <Tab label="Add Campaigns"><CreateCampaign /></Tab>
            
            <Tab label="Customers"><Customers /></Tab>
            <Tab label="JobOffers"><JobOffers /></Tab>
            <Tab label="JobRequests"><JobRequests /></Tab>
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