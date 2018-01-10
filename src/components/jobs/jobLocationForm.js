import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'react-elemental';
//import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as actions from '../../actions/jobOfferingsActions';
//import JobOfferingsTextInput from './JobOfferingsTextInput';

const JobLocationForm = ({jobLocation,onSave, onChange, loading, errors}) => {
  
    return (
      <div>
         
         <h2>Manage Job Location</h2>
         <div className="row">
           <div className="col-md-6">
            <TextField
            name="location"
            label="The venue"
            placeholder="Location the work"
            onChange={onChange}
            value={jobLocation.location} 
            error={errors.location}/>
           </div>
         <div className="col-md-4">
           <TextField 
            type="text"
            name="city"
            label="City"
            placeholder="City"
            onChange={onChange}
            value={jobLocation.city} 
            error={errors.city}/>
            </div>
         </div>
          <div className="row">
           <div className="col-md-4">
            <TextField
             type="text"
              name="state"
              label="State"
              placeholder="State"
              onChange={onChange}
              value={jobLocation.state} 
              error={errors.state}/>
            </div>
            <div className="col-md-4">
             <TextField
              type="text"
              name="employer_post_id"
              label="employer post id"
              placeholder="employer_post_id:"
              onChange={onChange}
              value={jobLocation.employer_post_id} 
              error={errors.job_employer_post_id}/>
            </div>
        </div> 
        
          <input
          type="submit"
          disabled={loading}
          value={loading ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave} />
      </div>
    );
  };


JobLocationForm.propTypes = {
  //actions: PropTypes.object.isRequired,
  jobLocation: PropTypes.object.isRequired,
  onSave: PropTypes.func,//.isRequired,
  onChange: PropTypes.func,//.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default JobLocationForm;

