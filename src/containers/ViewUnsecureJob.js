import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerProfilesActions';
//import * as jobofferactions from '../actions/jobOfferActions';
//import {loadSecuredJobOfferings} from '../actions/loggedInUserSearchActions';
import {loadJobOfferings} from '../actions/jobOfferingsActions';
//import * as actions from '../actions/jobOfferingsActions';
import ShowJobOffer from '../components/viewUnsecureJob/ShowJobOffer';
//import {NavLink} from 'react-router-dom';
import Header from '../components/universal/CustomerHeader';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
import Headers from '../components/layouts/Headers';
import Sidebar from '../components/layouts/Sidebar';
import Controls from '../components/controls/CustomerControls';
import Footers from '../components/layouts/Footers';
import Footer from '../components/universal/SecureFooter';

export class ViewUnsecureJobPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      unsecureJob: {},
      errors: {}
    };
    
    this.showJobOfferState = this.showJobOfferState.bind(this);
    
  }
   componentDidMount() {
     //if (!this.props.job_offer.id) {
       //debugger;
       this.props.dispatch(loadJobOfferings());
    // }
   }
  shouldComponentUpdate(nextProps) {
     //debugger;
        const differentUnsecureJob = this.props.unsecureJob.job.id !== nextProps.unsecureJob.job.id;
        //const differentfriend = this.props.myFriend !== nextProps.myFriend;
        return differentUnsecureJob; //|| differentfriend;
    }
  
  showJobOfferState(event) {
    const field = event.target.name;
    let unsecureJob = this.state.unsecureJob;
    unsecureJob[field] = event.target.value;
    return this.setState({jobOffer: unsecureJob});
  }
  showCustomerConnectState(event) {
    const field = event.target.name;
    let customerConnect = this.state.customerConnect;
    customerConnect[field] = event.target.value;
    return this.setState({customerConnect: customerConnect});
  }
  saveJobOffer(event) {
    event.preventDefault();
    this.props.actions.saveJobOffer(this.state.jobOffer);
    this.context.router.history.push('/job-offerings');
  }
  

  render() {
    const {unsecureJob} = this.props;
    //debugger;
    return (
      <Page>
       <Headers>
         <Header/>
        </Headers>
        <Main> 
        <div className="col-xs-8">
          
            <ShowJobOffer key={'1'}  
            secureJob={unsecureJob}
             />
          
         </div>
          <Sidebar>
            <Controls />
          </Sidebar>
          <Footers>
           <Footer/>
          </Footers>
        </Main> 
       </Page>
    );
  }
}

ViewUnsecureJobPage.propTypes = {
  actions: PropTypes.object.isRequired,
  unsecureJob: PropTypes.object.isRequired,
  loading: PropTypes.number.isRequired,
  dispatch: PropTypes.func
};

ViewUnsecureJobPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getUnsecureJobById(unsecureJobs, id) {
  //debugger;
  const unsecureJob = unsecureJobs.filter((unsecureJob,index) => index == id);
  //debugger;
  if (unsecureJob) return unsecureJob[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  //debugger;
  const unsecureJobId = ownProps.match.params.id; // from the path `/jobOffer/:id`
  //const jobOfferId = ownProps.location.key;
  //debugger;
  let unsecureJob = { job:{id: '', title: '', description: ''}, 
                   insight:{id: '', job_category: ''}, 
                   location:{location: '', city: '', state: ''},
                   customer:{username: '', firstname: '',lastname: ''}
  };
  
  if (unsecureJobId && state.jobOffers.length > 0 ) {
    //debugger;
    unsecureJob = getUnsecureJobById(state.jobOffers, unsecureJobId);
  }
  
  return {
   unsecureJob: unsecureJob,
   loading: state.ajaxCallsInProgress
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    //jobofferactions: bindActionCreators(jobofferactions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewUnsecureJobPage);
