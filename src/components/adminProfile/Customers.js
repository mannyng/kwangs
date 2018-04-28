import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import AllCustomers from './CustomerTabs/AllCustomers';
import AllUsers from './CustomerTabs/AllUsers';

const Customers = () => {
    
    return (
        <div>
         <h2>Customers Management</h2>
         <Tabs>
           <Tab label="Recent" />
           <Tab label="Recent Users"><AllUsers /></Tab>
           <Tab label="Recent Customers"><AllCustomers /></Tab>
         </Tabs>
        </div> 
        );
};    

Customers.propTypes = {
    actions: PropTypes.object
};    

export default Customers;