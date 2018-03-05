import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button,Text} from 'react-elemental';
import BaseWidget from '../widgets/BaseWidget';
import WidgetHeader from '../widgets/WidgetHeader';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/jobOfferActions';
import {connect} from 'react-redux';


class CustomerControls extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      loading: 0,
      errors: {}
    };
    
    //this.redirectToAddJobOfferPage = this.redirectToAddJobOfferPage.bind(this);
    //this.redirectToAddJobInsight = this.redirectToAddJobInsight.bind(this);
    this.redirectToAddRequest = this.redirectToAddRequest.bind(this);
    this.redirectToAddJob = this.redirectToAddJob.bind(this);
    this.redirectToActiveEmployer = this.redirectToActiveEmployer.bind(this);
    this.redirectToLatestJob = this.redirectToLatestJob.bind(this);
    this.redirectToNewestEmployees = this.redirectToNewestEmployees.bind(this);
  }
  
  shouldComponentUpdate(nextProps) {
      //debugger;
      const differentProfile = this.props.profile.status !== nextProps.profile.status;
      return differentProfile;
  }
  redirectToAddRequest() {
      //debugger;
    this.props.actions.setVisibilityFilter('add_job_request');
    this.context.router.history.push('/create_job');
  }
  redirectToAddJob() {
     // debugger;
    this.props.actions.setVisibilityFilter('add_job_form');
    this.context.router.history.push('/create_job');
  }
   redirectToActiveEmployer() {
      //debugger;
    this.props.actions.setVisibilityFilter('active_employers');
    this.context.router.history.push('/search_jobs');
  }
  redirectToLatestJob() {
      //debugger;
    this.props.actions.setVisibilityFilter('latest_jobs');
    this.context.router.history.push('/search_jobs');
    
  }
  redirectToNewestEmployees() {
     // debugger;
    this.props.actions.setVisibilityFilter('newest_employees');
    this.context.router.history.push('/search_jobs');
  }
  
  
  render(){
      const {profile,loading} = this.props;
      return (
       <BaseWidget type="info">
         <WidgetHeader loading={loading}><Text size="epilson" bold>Control Center</Text></WidgetHeader>
         {profile.myprofile && profile.myprofile.customer_type == 'employer' &&
         <Button onClick={this.redirectToAddJob}>Create Job Offer
          <span className="fa fa-cog fa-lg fa-pull-right"/>
         </Button>
          } 
          {profile.myprofile && profile.myprofile.customer_type == 'employee' &&
         <Button onClick={this.redirectToAddRequest}>Create Job Request
          <span className="fa fa-cog fa-lg fa-pull-right"/>
         </Button>
          }
           
         <hr />
         <Button onClick={this.redirectToLatestJob}>Latest Jobs
          <span className="fa fa-cog fa-lg fa-pull-right"/>
         </Button>
         <hr />
         <Button onClick={this.redirectToNewestEmployees}>Newest Employees
          <span className="fa fa-cogs fa-lg fa-pull-right"/>
         </Button>
       </BaseWidget>
      );
  }
  
}  
CustomerControls.propTypes = {
    history: PropTypes.object,
    loading: PropTypes.number,
    actions: PropTypes.object,
    profile: PropTypes.object.isRequired,
};

CustomerControls.contextTypes = {
  router: PropTypes.object.isRequired
};
function mapStateToProps(state) {
return {
   loading: state.ajaxCallsInProgress,
   profile: state.profile,
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
)(CustomerControls);