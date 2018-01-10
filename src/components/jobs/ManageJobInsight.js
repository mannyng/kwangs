import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import {Button} from 'react-elemental';
//import BaseWidget from '../widgets/BaseWidget';
//import WidgetHeader from '../widgets/WidgetHeader';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/jobOfferActions';
import {connect} from 'react-redux';
import InsightForm from './jobInsightForm';
import Header from '../universal/CustomerHeader';
import Page from '../layouts/Page';
import Main from '../layouts/Main';
import Headers from '../layouts/Headers';
//import Sidebar from '../layouts/Sidebar';


class ManageJobInsight extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      jobInsight: Object.assign({}, this.props.jobInsight),
      errors: {}
    };
    
    this.updateJobInsightState = this.updateJobInsightState.bind(this);
    this.saveJobInsight = this.saveJobInsight.bind(this);
    
  }
    componentWillReceiveProps(nextProps) {
    if (this.props.jobInsight.id != nextProps.jobInsight.id) {
      //Necessary to populate the form when existing course is loaded directly.
      this.setState({jobInsight: Object.assign({}, nextProps.jobInsight)});
    }
  }
  
  updateJobInsightState(event) {
    const field = event.target.name;
    let jobInsight = this.state.jobInsight;
    jobInsight[field] = event.target.value;
    return this.setState({jobInsight: jobInsight});
  }
  
  saveJobInsight(event) {
    event.preventDefault();
    this.props.actions.saveJobInsight(this.state.jobInsight);
    this.context.router.history.push('/jobs');
  }
  
  render(){
      
      return (
       <Page>
       
       <Headers>
         <Header/>
        </Headers>
        <Main>
         
         <InsightForm 
          onChange={this.updateJobInsightState}
          onSave={this.saveJobInsight}
          jobInsight={this.state.jobInsight}
          errors={this.state.errors}
          onClick={this.redirectToAddJobInsight} />
          
         </Main>
       </Page>
      );
  }
  
}  
ManageJobInsight.propTypes = {
    history: PropTypes.object,
    actions: PropTypes.object,
    jobInsight: PropTypes.object.isRequired
};
ManageJobInsight.contextTypes = {
  router: PropTypes.object.isRequired
};
function mapStateToProps(state) {
return {
   job_offer: state.job_offer,
   jobInsight: state.job_offer.jobInsight
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
)(ManageJobInsight);