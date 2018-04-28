import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import RecentRequests from './RequestTabs/RecentRequests';

const JobRequests = (recent_requests) => {
    
        return (
        <div>
         <h2>JobRequests Management</h2>
         <Tabs>
           <Tab label="Recent" />
           <Tab label="Recent Job Requests"><RecentRequests recent_requests={recent_requests}/></Tab>
         </Tabs>
        </div> 
        );
};    

JobRequests.propTypes = {
    actions: PropTypes.object
};    

export default JobRequests;