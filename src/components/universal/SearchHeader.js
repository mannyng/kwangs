import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import RadioButton from './RadioButton';


const SearchHeader = props => {
  const { handleSubmit, pristine, reset, submitting, searchFor, jobCategories, naijaStateLists, handleChange} = props;
  
  //debugger;
  return (
    <div>
     
       <form onSubmit={handleSubmit(searchFor)}>
        
         <div className="row">
          <div className="col-xs-3">
           <Field name="state" component="select" className="form-control">
            <option value="">Select state...</option>
            {naijaStateLists.map(naijaStateOption =>
              <option value={naijaStateOption.value} key={naijaStateOption.value}>{naijaStateOption.text}</option>)}
           </Field>
          </div>
          <div className="col-xs-3">
           <Field name="job_category" component="select" className="form-control">
            <option value="">Select job category...</option>
            {jobCategories.map(job_categoryOption =>
              <option value={job_categoryOption.value} key={job_categoryOption.value}>{job_categoryOption.text}</option>)}
           </Field>
          </div>
          <div className="col-xs-3">
            <div className="row">
             <div className="col-xs-6">
              <RadioButton name="value" caption="Job Offer" radioButtonValue="offer" handleChange={handleChange}/>
             </div>
             <div className="col-xs-6">
              <RadioButton name="value" caption="Job Request" radioButtonValue="request" handleChange={handleChange}/>
             </div>
            </div>
          </div>  
        <div className="col-xs-3">
         <button type="submit" disabled={submitting} className="btn btn-info">
          <i className="fa fa-plus" aria-hidden="true"/>Search</button>
          {' '}
          <button type="button" disabled={pristine || submitting} onClick={reset}className="btn btn-danger">
          <i className="fa fa-bolt" aria-hidden="true"/>
           Clear Values
         </button>
        </div>
       </div>
      </form>
    </div>
  );    
};  

SearchHeader.propTypes = {
  handleSubmit:PropTypes.func.isRequired,
  handleChange:PropTypes.func.isRequired, 
  jobCategories: PropTypes.array.isRequired,
  naijaStateLists: PropTypes.array.isRequired,
  searchFor: PropTypes.func,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'searchHeaderForm', // a unique identifier for this form
  validate,
})(SearchHeader);