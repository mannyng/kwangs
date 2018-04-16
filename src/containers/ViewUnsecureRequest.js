import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerProfilesActions';
import * as jobofferactions from '../actions/jobOfferActions';
//import {loadJobRequests} from '../actions/myJobOfferActions';
import ShowJobRequest from '../components/viewUnsecureJob/ShowJobRequest';
//import {NavLink} from 'react-router-dom';
import Header from '../components/universal/CustomerHeader';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
import Headers from '../components/layouts/Headers';
import Sidebar from '../components/layouts/Sidebar';
import Controls from '../components/controls/Controls';
import Footers from '../components/layouts/Footers';
import Footer from '../components/universal/SecureFooter';

export class UnsecureRequestPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }
 

  render() {
    const {unsecureJob} = this.props;
    //debugger;
    return (
      <Page>
       <Headers>
         <Header />
        </Headers>
        <Main> 
        <div className="col-xs-8">
          
            <ShowJobRequest key={'1'} 
            unsecureJob={unsecureJob}
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

UnsecureRequestPage.propTypes = {
  actions: PropTypes.object.isRequired,
  jobofferactions: PropTypes.object.isRequired,
  unsecureJob: PropTypes.object.isRequired,
  loading: PropTypes.number.isRequired,
  dispatch: PropTypes.func
};

UnsecureRequestPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getSecureJobById(unsecureJobs, id) {
  //debugger;
  const unsecureJob = unsecureJobs.filter((unsecureJob,index) => index == id);
  //debugger;
  if (unsecureJob) return unsecureJob[0];
  return null;
}
function mapStateToProps(state, ownProps) {
  //debugger;
  const unsecureJobId = ownProps.match.params.id; // from the path `/jobOffer/:id`
  
  let unsecureJob = {id: '', title: '', description: '', job_category: '', city: '', state: '', customer_id: ""};
  
  if (unsecureJobId && state.searchRequests.length > 0 ) {
    //debugger;
    unsecureJob = getSecureJobById(state.searchRequests, unsecureJobId);
  }

  return {
   unsecureJob: unsecureJob,
   loading: state.ajaxCallsInProgress
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    jobofferactions: bindActionCreators(jobofferactions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnsecureRequestPage);
