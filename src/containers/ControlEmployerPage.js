import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerProfilesActions';
import {loadSecuredJobOfferings} from '../actions/loggedInUserSearchActions';
import {loadJobRequests} from '../actions/myJobOfferActions';
import IndexPage from '../components/customersHomePage/IndexPage';
import LatestCustomerPage from '../components/customersHomePage/LatestCustomerPage';
import LatestEmployeePage from '../components/customersHomePage/LatestEmployeePage';
//import {NavLink} from 'react-router-dom';
import Header from '../components/universal/CustomerHeader';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
import Headers from '../components/layouts/Headers';
import Sidebar from '../components/layouts/Sidebar';
import CustomerControls from '../components/controls/CustomerControls';
import Footers from '../components/layouts/Footers';
import Footer from '../components/universal/SecureFooter';
import { getVisibleSecureJobs,getVisibleSecureRequests } from '../selectors';

export class ControlEmployerPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      secureJob: {},
      errors: {},
      customerConnect: {}
    };
    
    this.showJobOfferState = this.showJobOfferState.bind(this);
    this.saveCustomerConnect = this.saveCustomerConnect.bind(this);
    
  }
   componentDidMount() {
     //if (!this.props.job_offer.id) {
       //debugger;
       this.props.dispatch(loadSecuredJobOfferings());
       this.props.dispatch(loadJobRequests());
    // }
   }
  shouldComponentUpdate(nextProps) {
     //debugger;
        const differentSecureJob = this.props.secureJob !== nextProps.secureJob;
        const differentSecurerequest = this.props.secureRequest !== nextProps.secureRequest;
        return differentSecureJob || differentSecurerequest;
    }
  
  showJobOfferState(event) {
    const field = event.target.name;
    let secureJob = this.state.secureJob;
    secureJob[field] = event.target.value;
    return this.setState({jobOffer: secureJob});
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
  
  saveCustomerConnect(event) {
    //debugger;
    event.preventDefault();
    if(this.props.profile && this.props.secureJob){
    this.props.actions.saveCustomerConnect(this.props.profile.myprofile.id,this.props.secureJob.job.customer_id);
    this.context.router.history.push('/jobs');
    }
  }

  render() {
    const {secureJob,newest_employees} = this.props;
    //debugger;
    return (
      <Page>
       <Headers>
         <Header/>
        </Headers>
        <Main> 
        {this.props.visibilityFilter == 'latest_jobs' &&
        <div className="col-xs-8">
          <IndexPage secureJobs={secureJob}/>
        </div>
        }
        {this.props.visibilityFilter == 'active_employers' &&
        <div className="col-xs-8">
          <LatestCustomerPage secureJobs={secureJob}/>
        </div>
        }
        {this.props.visibilityFilter == 'newest_employers' &&
        <div className="col-xs-8">
          <LatestEmployeePage secureJobs={newest_employees}/>
        </div>
        }
          <Sidebar>
            <CustomerControls />
          </Sidebar>
          <Footers>
           <Footer/>
          </Footers>
        </Main> 
       </Page>
    );
  }
}

ControlEmployerPage.propTypes = {
  actions: PropTypes.object.isRequired,
  secureJob: PropTypes.array,
  newest_employees: PropTypes.array,
  profile: PropTypes.object.isRequired,
  loading: PropTypes.number.isRequired,
  dispatch: PropTypes.func,
  visibilityFilter: PropTypes.string.isRequired,
  secureRequest: PropTypes.object.isRequired
};

ControlEmployerPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  //debugger;

  return {
   secureJob: getVisibleSecureJobs(state),
   profile: state.profile,
   loading: state.ajaxCallsInProgress,
   visibilityFilter: state.visibilityFilter,
   newest_employees: getVisibleSecureRequests(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlEmployerPage);
