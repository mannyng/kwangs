import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/loggedInUserSearchActions';
//import JobOfferList from '../components/customers/JobOfferList';
import IndexPage from '../components/customersHomePage/IndexPage';
import Header from '../components/universal/CustomerHeader';
import Footer from '../components/universal/SecureFooter';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
import Headers from '../components/layouts/Headers';
import Sidebar from '../components/layouts/Sidebar';
import CustomerControls from '../components/controls/CustomerControls';
import MainContent from '../components//layouts/MainContent';
import Footers from '../components/layouts/Footers';
import SearchContainer from './SearchContainer';

export class CustomersPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      profile: {user_id: '', username:'', firstname:'', lastname:''},
      currentUser: { currentUser: 0},
      loading: 'false'
    };
    this.redirectToShowobOfferPage = this.redirectToShowJobOfferPage.bind(this);
  }

    componentDidMount() {
    if (this.props.profile.id > 0) {
      this.props.dispatch(actions.loadSecuredJobOfferings());
      }
     }

   shouldComponentUpdate(nextProps) {
    // debugger;
        const differentUser = this.props.currentUser !== nextProps.currentUser;
        const differenSecureJob = this.props.secureJobs.length !== nextProps.secureJobs.length;
        return differentUser || differenSecureJob;
    }

  redirectToShowJobOfferPage() {
    //debugger;
   this.context.router.history.push('/job');
  }

  render() {
    const {secureJobs} = this.props;
    //;
    return (
      <Page>
       <Headers>
         <Header/>
         </Headers>
         <SearchContainer />
        <Main> 
          <Sidebar>
           <CustomerControls/>
         </Sidebar>
        <MainContent>
        <div className="col-xs-8">
          <IndexPage secureJobs={secureJobs}/>
        </div>
          </MainContent>
      
        <Footers>
         <Footer/>
        </Footers>
        </Main> 
       </Page>
    );
  }
}

CustomersPage.contextTypes = {
  router: PropTypes.object.isRequired
};
CustomersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  secureJobs: PropTypes.array.isRequired,
  currentUser: PropTypes.number,
  loading: PropTypes.number,
  job_offer: PropTypes.array.isRequired,
  dispatch: PropTypes.func
 // createJobOffer: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  //debugger;
  return {
    secureJobs: state.secureJobs,
    job_offer: state.job_offer,
    loading: state.ajaxCallsInProgress,
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
    //createJobOffer: jobOffer => dispatch(actions.createJobOffer(jobOffer))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomersPage);
