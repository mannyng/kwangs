import React from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as actions from '../../actions/jobOfferingsActions';
//import JobOfferingsForm from '../components/jobs/JobOfferingsForm';

const JobOfferForm = ({jobOffer,onSave, onChange, loading, errors}) => {
  
    return (
      <div>
         
         <h2>Manage Jobs</h2>
         <input
           type="text"
            name="title"
            label="title"
            onChange={onChange}
            value={jobOffer.title} 
            error={errors.title}/>
          
          <textarea
          name="description"
          label="description"
          onChange={onChange}
          value={jobOffer.description} 
          error={errors.description}/>
          
          <input
          type="submit"
          disabled={loading}
          value={loading ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave} />
      </div>
    );
  };


JobOfferForm.propTypes = {
  //actions: PropTypes.object.isRequired,
  jobOffer: PropTypes.object.isRequired,
  onSave: PropTypes.func,//.isRequired,
  onChange: PropTypes.func,//.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default JobOfferForm;

//function mapStateToProps(state, ownProps) {
//  debugger;
//  return {
//    jobOffers: state.jobOffers
 // };
//}

//function mapDispatchToProps(dispatch) {
//  return {
//    actions: bindActionCreators(actions, dispatch)
//    //createJobOffer: jobOffer => dispatch(actions.createJobOffer(jobOffer))
//  };
//}

//export default connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(JobOfferForm);

