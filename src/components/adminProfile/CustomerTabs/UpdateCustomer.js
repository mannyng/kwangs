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

class UpdateCustomer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      id: this.props.customer.id,
      username: this.props.customer.username,
      firstname: this.props.customer.firstname,
      lastname: this.props.customer.lastname,
      address: this.props.customer.address,
      city: this.props.customer.city,
      state: this.props.customer.state,
      customer_type: this.props.customer.customer_type,
      status: this.props.customer.status,
      user_id: this.props.customer.user_id,
      latitude: this.props.customer.latitude,
      longitude: this.props.customer.longitude
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e){
      //debugger;
      e.preventDefault();
      const {id,user_id,username,firstname,lastname,address,city,state,status,latitude,
 longitude,customer_type} = this.state;
      //const id = this.state.card.job.id;
      this.props.actions.adminUpdateCustomer(id,user_id,username,firstname,lastname,address,city,state,status,latitude,
 longitude,customer_type);
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
    const customer_type = [ 'employer', 'employee' ]; 
    const naijaStateList = this.props.naijaStateList;
    //debugger;
    return (
      <div>
        <button onClick={this.openModal} className="btn btn-info pull-right">
        Update Customer
        <i className="fa fa-taxi" aria-hidden="true"/>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Update this Customer"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Job Offer</h2>
          <article>
           <form onSubmit={this.handleSubmit.bind(this)}>
           
             <div className="row">
               <div className="col-xs-4">
                 <label>Username</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.username} 
                   onChange={event => this.setState({username: event.target.value})}
                   className="form-control" />
                </div>
               </div>
               
              <div className="row">
               <div className="col-xs-4">
                 <label>Firstname</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.firstname} 
                   onChange={event => this.setState({firstname: event.target.value})}
                   className="form-control" />
                </div>
               </div>
              
               <div className="row">
               <div className="col-xs-4">
                 <label>Lastname</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.lastname} 
                   onChange={event => this.setState({lastname: event.target.value})}
                   className="form-control" />
                </div>
               </div>
              
              <div className="row">
               <div className="col-xs-4">
                 <label>Address</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.address} 
                   onChange={event => this.setState({address: event.target.value})}
                   className="form-control" />
                </div>
              </div>
              <div className="row">
               <div className="col-xs-4">
                 <label>City</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.city} 
                   onChange={event => this.setState({city: event.target.value})}
                   className="form-control" />
                </div>
              </div>
               <div className="row">
                 <div className="col-xs-4">
                   <label>State</label>
                 </div>
                 <div className="col-xs-8">
                 <select value={this.state.state} 
                   onChange={event => this.setState({state: event.target.value})}
                  className="form-control">
                  <option value="">{this.state.state}</option>
                  {naijaStateList.map(naija_stateOption =>
                 <option value={naija_stateOption.value} key={naija_stateOption.value}>{naija_stateOption.text}</option>)}
                 </select>
                 </div>
               </div>
              <div className="row">
               <div className="col-xs-4">
                 <label>Status</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.status} 
                   onChange={event => this.setState({status: event.target.value})}
                   className="form-control" />
                </div>
              </div>
              <div className="row">
               <div className="col-xs-4">
                 <label>User ID</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.user_id} 
                   onChange={event => this.setState({user_id: event.target.value})}
                   className="form-control" />
                </div>
              </div>
              <div className="row">
               <div className="col-xs-4">
                 <label>Latitude</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.latitude} 
                   onChange={event => this.setState({latitude: event.target.value})}
                   className="form-control" />
                </div>
              </div>
              <div className="row">
               <div className="col-xs-4">
                 <label>Longitude</label>
                </div>
                <div className="col-xs-8">
                   <input type="text" value={this.state.longitude} 
                   onChange={event => this.setState({longitude: event.target.value})}
                   className="form-control" />
                </div>
              </div>
               <div className="row">
                 <div className="col-xs-4">
                  <label>Employee Type</label>
                 </div>
                 <div className="col-xs-8">
                  <select value={this.state.customer_type} 
                   onChange={event => this.setState({customer_type: event.target.value})}
                   className="form-control">
                   {customer_type.map(employee_typeOption =>
                   <option value={employee_typeOption} key={employee_typeOption}>{employee_typeOption}</option>)}
                  </select>
                 </div>
               </div>
            <div>
              <button type="submit" className="btn btn-info">
             <i className="fa fa-plus" aria-hidden="true"/>Update Job Offer</button>
            </div>
               
           </form>
          
          </article>
        </Modal>
      </div>
    );
  }
}
UpdateCustomer.propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  currentUser: PropTypes.number,
  loading: PropTypes.number,
  naijaStateList: PropTypes.array.isRequired,
  customer: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  //debugger;
  const naijaStateFormattedForDropDown = state.stateLists.map(stateList => {
     return {
         value: stateList.id,
         text: stateList.name
     };
    });
  return {
    profile: state.profile,
    currentUser: state.currentUser.currentUser,
    loading: state.ajaxCallsInProgress,
    naijaStateList: naijaStateFormattedForDropDown
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
)(UpdateCustomer);