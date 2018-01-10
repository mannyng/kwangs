import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-elemental';
import BaseWidget from '../widgets/BaseWidget';
import WidgetHeader from '../widgets/WidgetHeader';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/jobOfferActions';
import {connect} from 'react-redux';

class Controls extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      loading: '0',
      errors: {}
    };
    
    this.redirectToAddJobOfferPage = this.redirectToAddJobOfferPage.bind(this);
    this.redirectToAddJobInsight = this.redirectToAddJobInsight.bind(this);
    this.redirectToAddJobLocation = this.redirectToAddJobLocation.bind(this);
  }
  
  
  redirectToAddJobOfferPage() {
      //debugger;
    this.context.router.history.push('/customerSignup');
  }
  redirectToAddJobInsight() {
      //debugger;
    this.context.router.history.push('/manageJobInsight');
  }
  redirectToAddJobLocation() {
     // debugger;
    this.context.router.history.push('/manageJobLocation');
  }
  
  render(){
      const {loading} = this.props;
      return (
       <BaseWidget type="info">
         <WidgetHeader  loading={loading}>Control Center</WidgetHeader>
         <Button onClick={this.redirectToAddJobOfferPage}>View Active Employers
          <span className="fa fa-cogs fa-lg fa-pull-right"/>
         </Button>
         <hr />
         <Button onClick={this.redirectToAddJobInsight}>Latest Jobs
          <span className="fa fa-cog fa-lg fa-pull-right"/>
         </Button>
         <hr />
         <Button onClick={this.redirectToAddJobLocation}>Newest Employers
          <span className="fa fa-cogs fa-lg fa-pull-right"/>
         </Button>
       </BaseWidget>
      );
  }
  
}  
Controls.propTypes = {
    history: PropTypes.object,
    actions: PropTypes.object,
    loading: PropTypes.bool.isRequired
};

Controls.contextTypes = {
  router: PropTypes.object.isRequired
};
function mapStateToProps(state) {
return {
   loading: state.ajaxCallsInProgress > 0
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
)(Controls);