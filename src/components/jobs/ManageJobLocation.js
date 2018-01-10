import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import {Button, Glyph} from 'react-elemental';
//import BaseWidget from '../widgets/BaseWidget';
//import WidgetHeader from '../widgets/WidgetHeader';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/jobOfferActions';
import {connect} from 'react-redux';
import LocationForm from './jobLocationForm';
import Header from '../universal/CustomerHeader';
import Page from '../layouts/Page';
import Main from '../layouts/Main';
import Headers from '../layouts/Headers';
//import Sidebar from '../layouts/Sidebar';


class ManageJobLocation extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      jobLocation: Object.assign({}, this.props.jobLocation),
      errors: {}
    };
    
    this.updateJobLocationState = this.updateJobLocationState.bind(this);
    this.saveJobLocation = this.saveJobLocation.bind(this);
    
  }
    componentWillReceiveProps(nextProps) {
    if (this.props.jobLocation.id != nextProps.jobLocation.id) {
      //Necessary to populate the form when existing course is loaded directly.
      this.setState({jobLocation: Object.assign({}, nextProps.jobLocation)});
    }
  }
  
  updateJobLocationState(event) {
    const field = event.target.name;
    let jobLocation = this.state.jobLocation;
    jobLocation[field] = event.target.value;
    return this.setState({jobLocation: jobLocation});
  }
  
  saveJobLocation(event) {
    event.preventDefault();
    this.props.actions.saveJobLocation(this.state.jobLocation);
    this.context.router.history.push('/jobs');
  }
  
  render(){
      
      return (
       <Page>
       
       <Headers>
         <Header/>
        </Headers>
        <Main>
         
         <LocationForm 
          onChange={this.updateJobLocationState}
          onSave={this.saveJobLocation}
          jobLocation={this.state.jobLocation}
          errors={this.state.errors}
          onClick={this.redirectToAddJobLocation} />
          
         </Main>
       </Page>
      );
  }
  
}  
ManageJobLocation.propTypes = {
    history: PropTypes.object,
    actions: PropTypes.object,
    jobLocation: PropTypes.object.isRequired
};
ManageJobLocation.contextTypes = {
  router: PropTypes.object.isRequired
};
function mapStateToProps(state) {
return {
   job_offer: state.job_offer,
   jobLocation: state.job_offer.jobLocation
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
)(ManageJobLocation);