import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/jobOfferingsActions';
//import Homepage from '../components/HomePage';
import Header from '../components/universal/CustomerHeader';
import Footer from '../components/universal/GeneralFooter';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
//import Content from '../components//layouts/Content';
import MainContent from '../components//layouts/MainContent';
import Headers from '../components/layouts/Headers';
import Footers from '../components/layouts/Footers';
import Sidebar from '../components/layouts/Sidebar';
import HomeHeader from '../components/homepage/HomeHeader';
import HomePage from '../components/HomePage';
import Controls from '../components/controls/Controls';
import CustomerControls from '../components/controls/CustomerControls';
import SearchContainer from './SearchContainer';
//import Header from './universal/CustomerHeader';

export class HomeContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: {}
    };
    this.redirectToAddJobOfferPage = this.redirectToAddJobOfferPage.bind(this);
  }

  redirectToAddJobOfferPage() {
    this.props.history.push('/jobOffer');
  }

  render() {
    const {jobOffers,myPoint,jobRequests,authd} = this.props;
    //debugger;
    return (
      <Page>
       <Headers>
        <Header />
        <SearchContainer />
       </Headers> 
        
      <Main>
      {!authd && <Sidebar>
        <Controls />
      </Sidebar>}
      {authd && <Sidebar>
        <CustomerControls />
      </Sidebar>}
      <MainContent>
      <div>      
      <HomePage myPoint={myPoint} jobOffers={jobOffers} authd={authd} />
      </div>
      
      </MainContent>
      
      <Footers>
      <div>
      <HomeHeader jobOffers={jobOffers} jobRequests={jobRequests}/>
      </div>
      
      <Footer/>
      
        <div className="navbar navbar-default navbar-fixed-bottom">
        <div className="row"> 
          <div className="col-md-2 col-xs-2"/>
          <div className="col-md-4 col-xs-4">Welcome to kwangala network</div>
          <div className="col-md-2 col-xs-2"/>
          <div className="col-md-4 col-xs-4">&copy; 2017 kwangs.ml</div>
         </div>
         </div>
        
        </Footers>
        </Main>
      </Page>
    );
  }
}

HomeContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  jobOffers: PropTypes.array.isRequired,
  jobRequests: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  myPoint: PropTypes.object.isRequired,
  //currentUser: PropTypes.number.isRequired,
  authd: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  //debugger;
  return {
    jobOffers: state.jobOffers,
    profile: state.profile,
    myPoint: state.myPoint,
    jobRequests: state.searchRequests,
    //currentUser: state.currentUser.currentUser,
    authd: state.auth.authenticated
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
)(HomeContainer);
