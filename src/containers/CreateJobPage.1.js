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
import AddJobDetailForm from '../components/jobs/AddJobDetailForm';
import showResults from '../components/jobs/showResults';
import SimpleHeader from '../components/universal/SimpleHeader';
import {loadJobCategories} from '../actions/jobCategoryActions';
import * as actions from '../actions/jobOfferingsActions';

class CreateJobPage extends Component {
    
    constructor(props, context) {
    super(props, context);
    
    this.state = {
      jobOffer: Object.assign({}, this.props.jobOffer),
      errors: {}
    };
    
    this.saveJobNew = this.saveJobNew.bind(this);
    
  }
   componentDidMount() {
     //if (!this.props.job_offer.id) {
       debugger;
       this.props.dispatch(loadJobCategories());
    // }
   }
  shouldComponentUpdate(nextProps) {
     debugger;
        const differentjobCategory = this.props.jobCategories.length !== nextProps.jobCategories.length;
        return differentjobCategory;
    }
    saveJobNew(values,event) {
    event.preventDefault();
     debugger;
    this.props.actions.saveJobOffer(values);
    this.context.router.history.push('/jobs');
  }
  
   mysubmit(values){
     
    this.props.actions.saveJobOffer(values, this.context.router.history);
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
    
    return (
      <Page>
      <Headers>
        <SimpleHeader />
      </Headers>  
      <Main>
      <Sidebar>
      Janks
      </Sidebar>
      <Content>
       <CreateJobForm actions={this.actions} onSubmit={showResults}/>
       <AddJobDetailForm 
       onSave={this.saveJobNew} 
       errors={this.state.errors}
       jobCategories={this.props.jobCategories}
       jobOffer={this.state.jobOffer}/>
      </Content>
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
  jobCategories: PropTypes.array.isRequired
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
   // debugger;
  return { 
      errorMessage: state.auth.error,
      jobOffer: jobOffer,
      jobCategories: jobCategoriesFormattedForDropDown
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobPage);
