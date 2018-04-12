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
import HomePage from '../components/homepage/CustomerHomePage';
import CustomerControls from '../components/controls/CustomerControls';
import SearchContainer from './SearchContainer';

export class CustomerHomeContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: {}
    };
    this.redirectToAddJobOfferPage = this.redirectToAddJobOfferPage.bind(this);
  }

shouldComponentUpdate(nextProps) {
     //debugger;
        const differentUser = this.props.currentUser !== nextProps.currentUser;
        //const differenSecureJob = this.props.secureJobs.length !== nextProps.secureJobs.length;
        return differentUser;// || differenSecureJob;
    }
    
  redirectToAddJobOfferPage() {
    this.props.history.push('/jobOffer');
  }

  render() {
    const {jobOffers,myPoint} = this.props;
    //debugger;
    return (
      <Page>
       <Headers>
        <Header />
        <SearchContainer />
       </Headers> 
        
      <Main>
      <Sidebar>
        <CustomerControls />
      </Sidebar>
      <MainContent>
      <div>      
      <HomePage myPoint={myPoint} jobOffers={jobOffers} />
      </div>
      
      </MainContent>
      
      <Footers>
      <div>
      <HomeHeader jobOffers={jobOffers}/>
      </div>
      <Footer/>
      
        <div className="navbar navbar-default navbar-fixed-bottom">
        <div className="row"> 
          <div className="col-md-2 col-xs-2"/>
          <div className="col-md-4 col-xs-4">Welcome to kwangala network</div>
          <div className="col-md-2 col-xs-2"/>
          <div className="col-md-4 col-xs-4">&copy; 2017 kwangs.com.ng</div>
         </div>
         </div>
        
        </Footers>
        </Main>
      </Page>
    );
  }
}

CustomerHomeContainer.propTypes = {
  currentUser: PropTypes.number,
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  jobOffers: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  myPoint: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  //debugger;
  return {
    currentUser: state.currentUser.currentUser,
    jobOffers: state.jobOffers,
    profile: state.profile,
    myPoint: state.myPoint
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
)(CustomerHomeContainer);
