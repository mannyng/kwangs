import React from 'react';
//import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../actions/adminActions';


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#app');
Modal.defaultStyles.overlay.backgroundColor = 'cornsilk';

class UpdateJobOffer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      card: this.props.secureJob,
      title: this.props.secureJob.job.title,
      description: this.props.secureJob.job.description,
      employee_title: this.props.secureJob.insight.employee_title,
      employer_post_id: this.props.secureJob.insight.employer_post_id,
      employee_type: this.props.secureJob.insight.employee_type,
      employee_category: this.props.secureJob.insight.employee_category,
      employee_experience: this.props.secureJob.insight.employee_experience,
      job_category: this.props.secureJob.insight.job_category,
      payment_type: this.props.secureJob.insight.payment_type,
      job_duration: this.props.secureJob.insight.job_duration,
      available_date: this.props.secureJob.insight.available_date,
      location: this.props.secureJob.location.location,
      city: this.props.secureJob.location.city,
      state: this.props.secureJob.location.state
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInsightSubmit = this.handleInsightSubmit.bind(this);
    this.handleLocationSubmit = this.handleLocationSubmit.bind(this);
  }
 
  handleSubmit(e){
      //debugger;
      e.preventDefault();
      const {title,description} = this.state;
      const id = this.state.card.job.id;
      this.props.actions.adminUpdateJobOffer(id,title,description);
  }
  handleInsightSubmit(e){
      //debugger;
      e.preventDefault();
      const {employee_title,employer_post_id,employee_type,employee_category,employee_experience,
          job_category,payment_type,job_duration,available_date} = this.state;
      const id = this.state.card.insight.id;
      this.props.actions.adminUpdateOfferInsight(id,employer_post_id,employee_title,employee_type,employee_category,employee_experience,
          job_category,payment_type,job_duration,available_date);
  }
  handleLocationSubmit(e){
      //debugger;
      e.preventDefault();
      const {employer_post_id,location,city,state} = this.state;
      const id = this.state.card.location.id;
      this.props.actions.adminUpdateOfferLocation(id,employer_post_id,location,city,state);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const payment_type = ['Cash','Cheque','Bitcoin'];
    const job_duration = ['Part Time','Full Time','Contract'];
    const employee_experience = ['Expert','Intermediate','Intern'];
    const employee_type = ['Individual','Company','Group'];
    const employee_category = [ 'Daily Pay', 'Weekly Pay', 'Monthly Pay' ]; 
    const jobCategories = this.props.jobCategories;
    //debugger;
    return (
      <div>
        <button onClick={this.openModal} className="btn btn-info pull-right">
        Update Job Offer
        <i className="fa fa-taxi" aria-hidden="true"/>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Most Recent Offers"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Job Offer</h2>
          <article>
           <form onSubmit={this.handleSubmit.bind(this)}>
           
             <div className="row">
               <div className="col-xs-4">
                 <label>Job Title</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.title} 
                   onChange={event => this.setState({title: event.target.value})}
                   className="form-control" />
                </div>
               </div>
  
               <div className="row">
                <div className="col-xs-4">
                  <label>Description</label>
                </div>
                <div className="col-xs-8">
                  <textarea value={this.state.description}  
                  onChange={event => this.setState({description: event.target.value})}  
                  className="form-control" rows="5"/>
                </div>
               </div>
               <div>
              <button type="submit" className="btn btn-info">
             <i className="fa fa-plus" aria-hidden="true"/>Update Job Offer</button>
            </div>
               
           </form>
           <form onSubmit={this.handleInsightSubmit.bind(this)}>
           
             <div className="row">
               <div className="col-xs-4">
                 <label>Job Title</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.employee_title} 
                   onChange={event => this.setState({employee_title: event.target.value})}
                   className="form-control" />
                </div>
               </div>
               <div className="row">
               <div className="col-xs-4">
                 <label>Available date</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.available_date} 
                   onChange={event => this.setState({available_date: event.target.value})}
                   className="form-control" />
                </div>
               </div>
               <div className="row">
                 <div className="col-xs-4">
                  <label>Employee Type</label>
                 </div>
                 <div className="col-xs-8">
                  <select value={this.state.employee_type} 
                   onChange={event => this.setState({employee_type: event.target.value})}
                   className="form-control">
                   {employee_type.map(employee_typeOption =>
                   <option value={employee_typeOption} key={employee_typeOption}>{employee_typeOption}</option>)}
                  </select>
                 </div>
               </div>
               <div className="row">
                <div className="col-xs-4">
                 <label>Employee Category</label>
                </div>
                <div className="col-xs-8">
                 <select value={this.state.employee_category} 
                   onChange={event => this.setState({employee_category: event.target.value})}
                 className="form-control">
                  {employee_category.map(employee_categoryOption =>
                  <option value={employee_categoryOption} key={employee_categoryOption}>{employee_categoryOption}</option>)}
                 </select>
                 </div>
                </div> 
                <div className="row">
                 <div className="col-xs-4">
                  <label>Job Duration</label>
                 </div>
                 <div className="col-xs-8">
                  <select value={this.state.job_duration}
                  onChange={event => this.setState({job_duration: event.target.value})}
                  className="form-control">
                  {job_duration.map(job_durationOption =>
                   <option value={job_durationOption} key={job_durationOption}>{job_durationOption}</option>)}
                  </select>
                 </div>
                </div>
                <div className="row">
                 <div className="col-xs-4">
                  <label>Payment Type</label>
                 </div>
                 <div className="col-xs-8">
                  <select value={this.state.payment_type} 
                   onChange={event => this.setState({payment_type: event.target.value})}
                   className="form-control">
                   {payment_type.map(pay_typeOption =>
                   <option value={pay_typeOption} key={pay_typeOption}>{pay_typeOption}</option>)}
                  </select>
                 </div>
                </div>
                <div className="row">
                 <div className="col-xs-4">
                   <label>Job Category</label>
                 </div>
                 <div className="col-xs-8">
                 <select value={this.state.job_category} 
                   onChange={event => this.setState({job_category: event.target.value})}
                  className="form-control">
                  {jobCategories.map(job_categoryOption =>
                 <option value={job_categoryOption.value} key={job_categoryOption.value}>{job_categoryOption.text}</option>)}
                 </select>
                 </div>
               </div>
       
               <div className="row">
                 <div className="col-xs-4">
                   <label>Experience</label>
                 </div>
                 <div className="col-xs-8">
                  <select value={this.state.employee_experience} 
                   onChange={event => this.setState({employee_experience: event.target.value})}
                  className="form-control">
                  {employee_experience.map(employee_experienceOption =>
                  <option value={employee_experienceOption} key={employee_experienceOption}>{employee_experienceOption}</option>)}
                  </select>
                 </div>
                </div>
            <div>
              <button type="submit" className="btn btn-info">
             <i className="fa fa-plus" aria-hidden="true"/>Update Job Offer Insight</button>
            </div>
               
           </form>
           <form onSubmit={this.handleLocationSubmit.bind(this)}>
           
             <div className="row">
               <div className="col-xs-4">
                 <label>Job Location</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.location} 
                   onChange={event => this.setState({location: event.target.value})}
                   className="form-control" />
                </div>
               </div>
               <div className="row">
               <div className="col-xs-4">
                 <label>Job City</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.city} 
                   onChange={event => this.setState({city: event.target.value})}
                   className="form-control" />
                </div>
               </div>
               <div className="row">
               <div className="col-xs-4">
                 <label>Job State</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.state} 
                   onChange={event => this.setState({state: event.target.value})}
                   className="form-control" />
                </div>
               </div>
        
               <div>
                <button type="submit"className="btn btn-info">
                 <i className="fa fa-location-arrow" aria-hidden="true"/>Update Offer Location</button>
               </div>
             </form>
          </article>
        </Modal>
      </div>
    );
  }
}
UpdateJobOffer.propTypes = {
  actions: PropTypes.object.isRequired,
  secureJob: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  currentUser: PropTypes.number,
  loading: PropTypes.number,
  most_recent_offers: PropTypes.array.isRequired,
  searchRequests: PropTypes.array.isRequired,
  jobCategories: PropTypes.array.isRequired,
  jobOffers: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  //debugger;
  const jobCategoriesFormattedForDropDown = state.jobCategories.map(jobCategory => {
     return {
         value: jobCategory.id,
         text: jobCategory.name
     };
    });
  return {
    profile: state.profile,
    currentUser: state.currentUser.currentUser,
    loading: state.ajaxCallsInProgress,
    customerConnect: state.customerConnect,
    jobOffers: state.jobOffers,
    most_recent_offers: state.admin.most_recent_job_offers,
    jobCategories: jobCategoriesFormattedForDropDown,
    searchRequests: state.searchRequests
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
)(UpdateJobOffer);