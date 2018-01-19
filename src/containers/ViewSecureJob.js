import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerProfilesActions';
import * as jobofferactions from '../actions/jobOfferActions';
import {loadSecuredJobOfferings} from '../actions/loggedInUserSearchActions';
import ShowJobOffer from '../components/viewSecureJob/ShowJobOffer';
//import {NavLink} from 'react-router-dom';
import Header from '../components/universal/CustomerHeader';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
import Headers from '../components/layouts/Headers';
import Sidebar from '../components/layouts/Sidebar';
import Controls from '../components/controls/Controls';
import Footers from '../components/layouts/Footers';
import Footer from '../components/universal/SecureFooter';

export class ViewJobOfferPage extends React.Component {
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
    // }
   }
  shouldComponentUpdate(nextProps) {
     //debugger;
        const differentSecureJob = this.props.secureJob.job.id !== nextProps.secureJob.job.id;
        const differentfriend = this.props.myFriend !== nextProps.myFriend;
        return differentSecureJob || differentfriend;
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
    this.props.actions.saveCustomerConnect(this.props.profile.id,this.props.secureJob.job.customer_id);
    this.context.router.history.push('/jobs');
    }
  }

  render() {
    const {profile, loading, customerConnect, secureJob,myFriend} = this.props;
    //debugger;
    return (
      <Page>
       <Headers>
         <Header profile={profile} loading={loading}/>
        </Headers>
        <Main> 
        <div className="col-xs-8">
          
            <ShowJobOffer key={'1'}  
            onSave={this.saveCustomerConnect}
            profile={profile}
            secureJob={secureJob}
            customerConnect={customerConnect}
             errors={this.state.errors}
             onChange={this.showCustomerConnectState}
             myFriend={myFriend}/>
          
         </div>
          <Sidebar>
            <Controls actions={this.actions} />
          </Sidebar>
          <Footers>
           <Footer/>
          </Footers>
        </Main> 
       </Page>
    );
  }
}

ViewJobOfferPage.propTypes = {
  actions: PropTypes.object.isRequired,
  jobofferactions: PropTypes.object.isRequired,
  secureJob: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  customerConnect: PropTypes.array,
  loading: PropTypes.number.isRequired,
  dispatch: PropTypes.func,
  myFriend: PropTypes.object.isRequired
};

ViewJobOfferPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getSecureJobById(secureJobs, id) {
  //debugger;
  const secureJob = secureJobs.filter((secureJob,index) => index == id);
  //debugger;
  if (secureJob) return secureJob[0];
  return null;
}
function getMyFriendById(myFriends, id) {
  //debugger;
  const myFriend = myFriends.filter((myFriend) => myFriend.id == id);
  //debugger;
  if (myFriend) return myFriend[0];
  return null;
}
function mapStateToProps(state, ownProps) {
  //debugger;
  const secureJobId = ownProps.match.params.id; // from the path `/jobOffer/:id`
  //const jobOfferId = ownProps.location.key;
  //debugger;
  let secureJob = { job:{id: '', title: '', description: ''}, 
                   insight:{id: '', job_category: ''}, 
                   location:{location: '', city: '', state: ''},
                   customer:{username: '', firstname: '',lastname: ''}
  };
  let myFriend = {username:'',firstname:''};
  
  if (secureJobId && state.secureJobs.length > 0 ) {
    //debugger;
    secureJob = getSecureJobById(state.secureJobs, secureJobId);
  }
  if (secureJob && state.myFriends.length > 0){
    //debugger;
    myFriend = getMyFriendById(state.myFriends, secureJob.customer.id);
  }
  return {
   secureJob: secureJob,
   myFriend: myFriend,
   profile: state.profile,
   customerConnect: state.customerConnect,
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
)(ViewJobOfferPage);
