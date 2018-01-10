import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/jobOfferingsActions';
import JobOfferForm from '../components/jobs/JobOfferForm';
//import {NavLink} from 'react-router-dom';
import Header from '../components/universal/CustomerHeader';

export class ManageJobOfferPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      jobOffer: Object.assign({}, this.props.jobOffer),
      errors: {}
    };
    
    this.updateJobOfferState = this.updateJobOfferState.bind(this);
    this.saveJobOffer = this.saveJobOffer.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.jobOffer.id != nextProps.jobOffer.id) {
      //Necessary to populate the form when existing course is loaded directly.
      this.setState({jobOffer: Object.assign({}, nextProps.jobOffer)});
    }
  }
  
  updateJobOfferState(event) {
    const field = event.target.name;
    let jobOffer = this.state.jobOffer;
    jobOffer[field] = event.target.value;
    return this.setState({jobOffer: jobOffer});
  }
  
  saveJobOffer(event) {
    event.preventDefault();
    this.props.actions.saveJobOffer(this.state.jobOffer);
    this.context.router.history.push('/job-offerings');
  }

  render() {
    const {profile} = this.props;
    return (
      <div>
       <Header profile={profile}/>
       <JobOfferForm 
       onChange={this.updateJobOfferState}
       onSave={this.saveJobOffer}
       jobOffer={this.state.jobOffer}
       errors={this.state.errors}
       jobCategories={this.props.jobCategories}
       />
       </div>
    );
  }
}

ManageJobOfferPage.propTypes = {
  actions: PropTypes.object.isRequired,
  jobOffer: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  jobCategories: PropTypes.array.isRequired
};

ManageJobOfferPage.contextTypes = {
  router: PropTypes.object.isRequired
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
  const jobCategoriesFormattedForDropDown = state.jobCategories.map(jobCategory => {
     return {
         value: jobCategory.id,
         text: jobCategory.name
     };
    });
  return {
   jobOffer: jobOffer,
   profile: state.profile,
   jobCategories: jobCategoriesFormattedForDropDown
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
)(ManageJobOfferPage);
