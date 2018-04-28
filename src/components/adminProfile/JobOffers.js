import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/adminActions';
import PropTypes from 'prop-types';
import RecentOffers from './RecentOffers';
import { Tab, Tabs } from 'react-bootstrap-tabs';
//import {Button,Text} from 'react-elemental';
import MostRecentOffers from './OfferTabs/MostRecentOffers';


class JobOffers extends Component {
    constructor(props, context) {
    super(props, context);

    this.state = {
      
    };
    }
     
    render(){
        const {most_recent_offers} = this.props;
        //debugger;
       return (
        <div>
         <h2>JobOffers Management</h2>
         <Tabs>
           <Tab label="Recent"><RecentOffers /></Tab>
           <Tab label="Most Recent"><MostRecentOffers most_recent_offers={most_recent_offers}
           /></Tab>
         </Tabs>
        </div> 
        );
    }
}    

JobOffers.propTypes = {
    actions: PropTypes.object,
    most_recent_offers: PropTypes.array.isRequired,
    jobCategories: PropTypes.array.isRequired
};    

function mapStateToProps(state) {
  //debugger;
  const jobCategoriesFormattedForDropDown = state.jobCategories.map(jobCategory => {
     return {
         value: jobCategory.id,
         text: jobCategory.name
     };
    });
  return {
    loading: state.ajaxCallsInProgress,
    most_recent_offers: state.admin.most_recent_job_offers,
    jobCategories: jobCategoriesFormattedForDropDown,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobOffers);
