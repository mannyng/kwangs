import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerProfilesActions';
import JobsSearchPage from '../components/homepage/JobsSearchPage';
import RequestsSearchPage from '../components/homepage/RequestsSearchPage';
//import {NavLink} from 'react-router-dom';
import Header from '../components/universal/CustomerHeader';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
import Headers from '../components/layouts/Headers';
import Sidebar from '../components/layouts/Sidebar';
import Controls from '../components/controls/Controls';
import Footers from '../components/layouts/Footers';
import Footer from '../components/universal/SecureFooter';
import { getVisibleJobOffers,getVisibleJobRequests } from '../selectors';//

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
        return differentvisibleJobOffers || differentvisibleJobRequests;
    }
  

  render() {
    const {visibleJobOffers,visibleJobRequests} = this.props;
    //debugger;
    return (
      <Page>
       <Headers>
         <Header/>
        </Headers>
        <Main> 
        {this.props.visibilityFilter == 'search_jobs' &&
        <div className="col-xs-8">
          <JobsSearchPage jobOffers={visibleJobOffers}/>
        </div>
        }
        {this.props.visibilityFilter == 'search_requests' &&
        <div className="col-xs-8">
          <RequestsSearchPage secureJobs={visibleJobRequests}/>
        </div>
        }
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

SearchResultContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  visibleJobOffers: PropTypes.array,
  visibleJobRequests: PropTypes.array,
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
   profile: state.profile,
   loading: state.ajaxCallsInProgress,
   searchTerm: state.searchTermFilter,
   visibilityFilter: state.visibilityFilter,
   visibleJobRequests: getVisibleJobRequests(state)
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
