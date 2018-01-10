import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-elemental';
import BaseWidget from '../widgets/BaseWidget';
import WidgetHeader from '../widgets/WidgetHeader';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/jobOfferActions';
import {connect} from 'react-redux';

class CustomerControls extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      //loading: 'false',
      errors: {}
    };
    
    this.redirectToAddJobOfferPage = this.redirectToAddJobOfferPage.bind(this);
    this.redirectToAddJobInsight = this.redirectToAddJobInsight.bind(this);
    this.redirectToAddJobLocation = this.redirectToAddJobLocation.bind(this);
    this.redirectToAddJob = this.redirectToAddJob.bind(this);
  }
  
  redirectToAddJobOfferPage() {
     // debugger;
    this.context.router.history.push('/customerSignup');
  }
  redirectToAddJobInsight() {
      //debugger;
    this.context.router.history.push('/manageJobInsight');
  }
  redirectToAddJobLocation() {
      //debugger;
    this.context.router.history.push('/manageJobLocation');
  }
  redirectToAddJob() {
     // debugger;
    this.context.router.history.push('/create_job');
  }
  
  render(){
      const {profile,loading} = this.props;
      return (
       <BaseWidget type="info">
         <WidgetHeader loading={loading}>Control Center</WidgetHeader>
         {profile.customer_type == 'employer' &&
         <Button onClick={this.redirectToAddJob}>Create Job
          <span className="fa fa-cog fa-lg fa-pull-right"/>
         </Button>
          } 
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