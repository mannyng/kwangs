import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
import Content from '../components/layouts/Content';
import Headers from '../components/layouts/Headers';
import Sidebar from '../components/layouts/Sidebar';
import CreateJobForm from '../components/jobs/CreateJobForm';
import AddJobLocation from '../components/jobs/AddJobLocation';
import AddJobDetailForm from '../components/jobs/AddJobDetailForm';
import AddJobRequestForm from '../components/jobs/CreateRequestForm';
import ShowResults from '../components/jobs/showResults';
import CustomerControls from '../components/controls/CustomerControls';
import Header from '../components/universal/CustomerHeader';
import {loadJobCategories} from '../actions/jobCategoryActions';
import * as actions from '../actions/myJobOfferActions';
import {reset} from 'redux-form';


class CreateJobPage extends Component {
    
    constructor(props, context) {
    super(props, context);
    
    this.state = {
      jobOffer: Object.assign({}, this.props.jobOffer),
      errors: {}
    };
    
    this.saveJobNew = this.saveJobNew.bind(this);
    this.submitMyJobOffer = this.submitMyJobOffer.bind(this);
    this.submitJobInsight = this.submitJobInsight.bind(this);
    this.submitMyJobLocation = this.submitMyJobLocation.bind(this);
    this.submitJobRequest = this.submitJobRequest.bind(this);
  }
   componentDidMount() {
     //if (!this.props.job_offer.id) {
       //debugger;
       this.props.dispatch(loadJobCategories());
    // }
   }
  shouldComponentUpdate(nextProps) {
    if (this.props.myJobOffer){
     //debugger;
        const differentjobCategory = this.props.jobCategories.length !== nextProps.jobCategories.length;
        const differentJob = this.props.myJobOffer.id !== nextProps.myJobOffer.id;
        const differentInsight = this.props.myJobInsight.id !== nextProps.myJobInsight.id;
        const differentLocation = this.props.myJobLocation.id !== nextProps.myJobLocation.id;
        return differentjobCategory || differentJob || differentInsight || differentLocation;
     }
    }
    saveJobNew(values,event) {
    event.preventDefault();
     //debugger;
    this.props.actions.saveJobOffer(values);
    this.context.router.history.push('/jobs');
  }
  
   submitMyJobOffer(values){
     //debugger;
    this.props.dispatch(actions.saveMyJobOffer(values.title,values.description,this.props.profile.id));
    //this.context.router.history.push('/add_job_details');
  }
  submitJobInsight(values){
    //ebugger;
    this.props.dispatch(actions.saveJobInsight(values.job_category,values.employee_category,values.job_duration,
    values.pay_type,values.employee_type,
    values.employee_title,values.employee_experience,this.props.myJobOffer.id));
  }
  submitMyJobLocation(values){
     //debugger;
    this.props.dispatch(actions.saveJobLocation(values.location,values.city,values.state,this.props.myJobOffer.id));
    //this.context.router.history.push('/add_job_details');
  }
  submitJobRequest(values){
    //debugger;
    this.props.dispatch(actions.saveJobRequest(values.job_category,values.employee_category,
    values.job_duration,
    values.pay_type,values.employee_type,
    values.employee_title,values.employee_experience,
    values.description,this.props.profile.myprofile.id));
    this.props.dispatch(reset('addJobRequestForm'));  // requires form name
  }
  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const {myJobOffer,jobCategories, myJobInsight, myJobLocation} = this.props;
    return (
      <Page>
      <Headers>
        <Header />
      </Headers>  
      <Main>
      <Sidebar>
      <CustomerControls />
      </Sidebar>
      {this.props.visibilityFilter == 'add_job_form' &&
      <Content>
      {myJobOffer.id == '' &&
       <CreateJobForm submitMyJobOffer={this.submitMyJobOffer} />
      }
       {this.props.myJobOffer.id && myJobInsight.id == '' &&
       <div>
       <h4>{myJobOffer.title}</h4>
       <AddJobDetailForm 
       jobCategories={jobCategories}
       submitJobInsight={this.submitJobInsight}
       myJobOffer={myJobOffer}/>
       </div>}
       {this.props.myJobOffer.id && myJobInsight.id && myJobLocation.id == '' &&
        <AddJobLocation submitMyJobLocation={this.submitMyJobLocation}/>
       }
       {myJobOffer.id && myJobInsight.id && myJobLocation.id &&
       <ShowResults myJobOffer={myJobOffer}
       myJobInsight={myJobInsight} 
       myJobLocation={myJobLocation} />
       }
      </Content>
      }
      {this.props.visibilityFilter == 'add_job_request' &&
       <Content>
        <AddJobRequestForm submitJobRequest={this.submitJobRequest}
        jobCategories={jobCategories}/>
       </Content>
      }
      </Main>
      </Page>
    );
  }
}

CreateJobPage.contextTypes = {   
  router: PropTypes.object.isRequired
};
CreateJobPage.propTypes = {
  actions: PropTypes.object.isRequired, 
  errorMessage: PropTypes.string,
  jobOffer: PropTypes.object.isRequired,
  jobCategories: PropTypes.array.isRequired,
  myJobOffer: PropTypes.object.isRequired,
  myJobInsight: PropTypes.object.isRequired,
  myJobLocation: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  visibilityFilter: PropTypes.string.isRequired
};

function getJobOfferById(jobOffers, id) {
  //debugger;
  const jobOffer = jobOffers.filter(jobOffer => jobOffer.id == id);
  if (jobOffer) return jobOffer[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  //debugger;
  const jobOfferId = ownProps.match.params.id; // from the path `/jobOffer/:id`
  //const jobOfferId = ownProps.location.key;
  //debugger;
  let jobOffer = {id: '', title: '', description: ''};
  
  if (jobOfferId && state.jobOffers.length > 0 ) {
    //debugger;
    jobOffer = getJobOfferById(state.jobOffers, jobOfferId);
  }
    //debugger;
    const jobCategoriesFormattedForDropDown = state.jobCategories.map(jobCategory => {
     return {
         value: jobCategory.id,
         text: jobCategory.name
     };
    });
    
  return { 
      errorMessage: state.auth.error,
      jobOffer: jobOffer,
      jobCategories: jobCategoriesFormattedForDropDown,
      myJobOffer: state.myJobOffer.myJobOffer,
      myJobInsight: state.myJobInsight.myJobInsight,
      myJobLocation: state.myJobLocation.myJobLocation,
      visibilityFilter: state.visibilityFilter,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobPage);
