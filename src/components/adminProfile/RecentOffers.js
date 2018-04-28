import React from 'react';
//import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/adminActions';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#app');
Modal.defaultStyles.overlay.backgroundColor = 'cornsilk';

class RecentOffers extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
      //debugger;
     //this.props.dispatch(actions.retrieveMostRecentJobOffers());
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
    const {jobOffers,most_recent_offers} = this.props;
    //debugger;
    return (
      <div>
        <button onClick={this.openModal}>Recent Offers</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Most Recent Offers"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Most Recent Job Offers are {" "} {most_recent_offers.length}</h2>
          <article>
      {jobOffers && most_recent_offers.map((secureJob, index) => 
       (<div className="jumbotron" id="fronte" key={secureJob.job.id}>
       
         <div key={"1"} className="panel panel-default">
         <div className="panel-header">
           <div className="col-xs-8">Job Title:{" "}{secureJob.job.title}{" "} Posted on:{" "}{secureJob.job.created_at} </div>
          </div>    
         {secureJob.insight && secureJob.job &&
          <div key={"1"} className="panel-body">
        
               <div>
                <p><small>{secureJob.insight.job_category}</small></p>
                <TextTruncate
                  line={1}
                  truncateText="…"
                  text={secureJob.job.description}
                  textTruncateChild={<Link to={'/job/' + index}>Read on</Link>}
                 />
               </div>
               {secureJob.location &&
               <div>
                <h5>{secureJob.location.location}</h5>
                <h5>{secureJob.location.city}</h5>
                
                  <Link to={'/job/' + index} className="btn btn-info pull-right">VIew Job{' '}
                  <i className="fa fa-taxi" aria-hidden="true"/>
                  </Link>
                <h3>Poster: <small>{secureJob.customer.username}</small></h3>
               </div>}
          </div>}
         </div>
       
        
      
     </div>))}
     </article>
        </Modal>
      </div>
    );
  }
}
RecentOffers.propTypes = {
  actions: PropTypes.object.isRequired,
  //dispatch: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  currentUser: PropTypes.number,
  loading: PropTypes.number,
  most_recent_offers: PropTypes.array.isRequired,
  searchRequests: PropTypes.array.isRequired,
  jobOffers: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  //debugger;
  return {
    profile: state.profile,
    currentUser: state.currentUser.currentUser,
    loading: state.ajaxCallsInProgress,
    customerConnect: state.customerConnect,
    jobOffers: state.jobOffers,
    most_recent_offers: state.admin.most_recent_job_offers,
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
)(RecentOffers);