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

class UpdateRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      id: this.props.request.id,
      job_category: this.props.request.job_category,
      employee_category: this.props.request.employee_category,
      job_duration: this.props.request.job_duration,
      pay_type: this.props.request.pay_type,
      employee_type: this.props.request.employee_type,
      employee_title: this.props.request.employee_title,
      employee_experience: this.props.request.employee_experience,
      customer_id: this.props.request.customer_id,
      description: this.props.request.description,
      status: this.props.request.status
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e){
      //debugger;
      e.preventDefault();
      const {id, job_category, employee_category, job_duration, pay_type, employee_type, employee_title,
 employee_experience, customer_id, description, status} = this.state;
      //const id = this.state.card.job.id;
      this.props.actions.adminUpdateOfferRequest(id, job_category, employee_category, job_duration, pay_type, employee_type, employee_title,
 employee_experience, customer_id, description, status);
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
    //const naijaStateList = this.props.naijaStateList;
    //debugger;
    return (
      <div>
        <button onClick={this.openModal} className="btn btn-info pull-right">
        Update Request
        <i className="fa fa-taxi" aria-hidden="true"/>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Update this Customer"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Update Offer Request</h2>
          <article>
           
           <form onSubmit={this.handleSubmit.bind(this)}>
           
             <div className="row">
               <div className="col-xs-4">
                 <label>Request Title</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.employee_title} 
                   onChange={event => this.setState({employee_title: event.target.value})}
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
             <i className="fa fa-plus" aria-hidden="true"/>Update Request</button>
            </div>
               
           </form>
          
          </article>
        </Modal>
      </div>
    );
  }
}
UpdateRequest.propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  currentUser: PropTypes.number,
  loading: PropTypes.number,
  request: PropTypes.object.isRequired,
  jobCategories: PropTypes.array.isRequired
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
    jobCategories: jobCategoriesFormattedForDropDown,
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
)(UpdateRequest);