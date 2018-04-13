import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerProfilesActions';
import JobsSearchPage from '../components/homepage/JobsSearchPage';
import RequestsSearchPage from '../components/homepage/RequestsSearchPage';
//import {NavLink} from 'react-router-dom';
import {Spinner} from 'react-elemental';
import Header from '../components/universal/CustomerHeader';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
import Headers from '../components/layouts/Headers';
import Sidebar from '../components/layouts/Sidebar';
import Controls from '../components/controls/Controls';
import Footers from '../components/layouts/Footers';
import Footer from '../components/universal/SecureFooter';
import { getVisibleJobOffers,getVisibleJobRequests,
getVisibleUnsecureRequests,getVisibleUnSecureJobs } from '../selectors'; //Selector functions

export class SearchResultContainer extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      visibleJobOffers: [],
      //visibleJobRequests: [],
      errors: {}
    };
    
    //this.showJobOfferState = this.showJobOfferState.bind(this);
    //this.saveCustomerConnect = this.saveCustomerConnect.bind(this);
    
  }
  
  shouldComponentUpdate(nextProps) {
     //debugger;
    const differentvisibleJobOffers = this.props.visibleJobOffers !== nextProps.visibleJobOffers;
    const differentvisibleJobRequests = this.props.visibleJobRequests !== nextProps.visibleJobRequests;
    const differentnewestJobRequests = this.props.newestJobRequests !== nextProps.newestJobRequests;
    const differentlatestJobOffers = this.props.latestJobOffers !== nextProps.latestJobOffers;
    return differentvisibleJobOffers || differentvisibleJobRequests || differentnewestJobRequests || differentlatestJobOffers;
    }
  

  render() {
    const {loading,visibilityFilter, visibleJobOffers,visibleJobRequests, newestJobRequests, latestJobOffers} = this.props;
    //debugger;
    return (
      <Page>
       <Headers>
         <Header/>
        </Headers>
        <Main> 
        <Sidebar>
          <Controls />
        </Sidebar>
        {loading > 0 && <small><Spinner /></small>}
        {visibilityFilter == 'search_jobs' && loading < 0 &&
        <div className="col-xs-8">
          <JobsSearchPage jobOffers={visibleJobOffers}/>
        </div>
        }
        {visibilityFilter == 'latest_jobs' && loading < 0 &&
        <div className="col-xs-8">
          <JobsSearchPage jobOffers={latestJobOffers}/>
        </div>
        }
        {visibilityFilter == 'search_requests' && loading < 0 &&
        <div className="col-xs-8">
          <RequestsSearchPage secureJobs={visibleJobRequests}/>
        </div>
        }
        {visibilityFilter == 'newest_employees' && loading < 0 &&
        <div className="col-xs-8">
          <RequestsSearchPage secureJobs={newestJobRequests}/>
        </div>
        }
        <Footers>
          <Footer/>
        </Footers>
        </Main> 
       </Page>
    );
  }
}

SearchResultContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  visibleJobOffers: PropTypes.array,
  visibleJobRequests: PropTypes.array,
  latestJobOffers: PropTypes.array,
  newestJobRequests: PropTypes.array,
  loading: PropTypes.number.isRequired,
  dispatch: PropTypes.func,
  searchTerm: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
};

SearchResultContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  //debugger;

  return {
   visibleJobOffers: getVisibleJobOffers(state),
   latestJobOffers: getVisibleUnSecureJobs(state),
   profile: state.profile,
   loading: state.ajaxCallsInProgress,
   searchTerm: state.searchTermFilter,
   visibilityFilter: state.visibilityFilter,
   visibleJobRequests: getVisibleJobRequests(state),
   newestJobRequests: getVisibleUnsecureRequests(state)
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
)(SearchResultContainer);
