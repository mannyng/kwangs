import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Glyph} from 'react-elemental';
import BaseWidget from '../widgets/BaseWidget';
import WidgetHeader from '../widgets/WidgetHeader';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/jobOfferActions';
import {connect} from 'react-redux';

class CustomerControls extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      recording: 'false',
      errors: {}
    };
    
    this.redirectToAddJobOfferPage = this.redirectToAddJobOfferPage.bind(this);
    this.redirectToAddJobInsight = this.redirectToAddJobInsight.bind(this);
    this.redirectToAddJobLocation = this.redirectToAddJobLocation.bind(this);
    this.redirectToAddJob = this.redirectToAddJob.bind(this);
  }
  
  redirectToAddJobOfferPage() {
      debugger;
    this.context.router.history.push('/customerSignup');
  }
  redirectToAddJobInsight() {
      debugger;
    this.context.router.history.push('/manageJobInsight');
  }
  redirectToAddJobLocation() {
      debugger;
    this.context.router.history.push('/manageJobLocation');
  }
  redirectToAddJob() {
      debugger;
    this.context.router.history.push('/job');
  }
  
  render(){
      const {actions, loading} = this.props;
      return (
       <BaseWidget type="info">
         <WidgetHeader>Control Center</WidgetHeader>
         <Button onClick={this.redirectToAddJobOfferPage}>Configure Profile
          <span className="fa fa-cogs fa-lg fa-pull-right"></span>
         </Button>
         <hr />
         <Button onClick={this.redirectToAddJobInsight}>Create Insight
          <span className="fa fa-cog fa-lg fa-pull-right"></span>
         </Button>
         <hr />
         <Button onClick={this.redirectToAddJobLocation}>Create Job Location
          <span className="fa fa-cogs fa-lg fa-pull-right"></span>
         </Button>
         <hr />
         <Button onClick={this.redirectToAddJobLocation}>Create Job Location
          <span className="fa fa-cogs fa-lg fa-pull-right"></span>
         </Button>
         <hr />
         <Button onClick={this.redirectToAddJob}>Create Job
          <span className="fa fa-cog fa-lg fa-pull-right"></span>
         </Button>
       </BaseWidget>
      );
  }
  
}  
CustomerControls.propTypes = {
    history: PropTypes.object,
    loading: PropTypes.bool,
    actions: PropTypes.object
};

CustomerControls.contextTypes = {
  router: PropTypes.object.isRequired
};
function mapStateToProps(state) {
return {
   loading: state.loading
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