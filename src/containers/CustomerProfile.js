import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerProfilesActions';
import * as adminActions from '../actions/adminActions';
import  MyEmployerTab from '../components/customerProfile/MyEmployerTab';
import  MyEmployeeTab from '../components/customerProfile/MyEmployeeTab';
import  MyAdminTab from '../components/adminProfile/MyAdminTab';
import Header from '../components/universal/CustomerHeader';
import Headers from '../components/layouts/Headers';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
import Footers from '../components/layouts/Footers';
import Footer from '../components/universal/SecureFooter';
import Sidebar from '../components/layouts/Sidebar';
import CustomerControls from '../components/controls/CustomerControls';
import {Text} from 'react-elemental';
import {messageModalOpen,messageModalClose} from '../actions/modalStatusActions';


//import localStorage from 'localStorage';

export class CustomerProfile extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      profile: {user_id: '', username:'', firstname:'', lastname:''},
      currentUser: { currentUser: 0},
      loading: 'false',
      customerConnect:  {customer_connect:{},friend:{},customer:{}}
    };
    this.onClickAccept = this.onClickAccept.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.toggleOpenModal = this.toggleOpenModal.bind(this);
    this.toggleCloseModal = this.toggleCloseModal.bind(this);
    this._fr_message = this._fr_message.bind(this);
  }

    componentDidMount() {
      //this.props.dispatch(messageModalClose());
      //debugger;
    if (this.props.profile.myprofile.id) {
      this.props.dispatch(actions.fetchCustomerConnect(this.props.profile.myprofile.id));
      }
    if (this.props.profile.myprofile.status == 'admin') {
      this.props.dispatch(adminActions.retrieveMostRecentJobOffers());
      this.props.dispatch(adminActions.loadJobCategories());
      this.props.dispatch(adminActions.loadStateLists());
      this.props.dispatch(adminActions.adminRetrieveAllCustomers());
      this.props.dispatch(adminActions.adminRetrieveAllUsers());
      this.props.dispatch(adminActions.adminRetrieveRecentRequest());
    } 
   }
   //Action trigger is in the CustomerHeader.js
   shouldComponentUpdate(nextProps) {
    // debugger;
        const differentUser = this.props.currentUser !== nextProps.currentUser;
        const differenJobsLength = this.props.myJobs.length !== nextProps.myJobs.length;
        const differenConnect = this.props.customerConnect.length !== nextProps.customerConnect.length;
        const differenProfile = this.props.profile.myprofile.id !== nextProps.profile.myprofile.id;
        const differenModalStatus = this.props.isOpen !== nextProps.isOpen;
        
        return differentUser  || differenConnect || differenProfile || differenJobsLength || differenModalStatus;
    }
  
  _fr_message(friendId,username){
      //console.log(x_messages);
      //debugger;
      if (this.props.profile && this.props.profile.myconv){
      const gote = this.props.profile.myconv.filter((xmessage) => xmessage.sender.id == friendId
      && xmessage.recipient.id == this.props.profile.myprofile.id ||
        xmessage.sender.id == this.props.profile.myprofile.id &&
        xmessage.recipient.id == friendId);
    if(gote.length >= 1){
      //debugger;
      return (
        <div>
         <Text><b>{username}</b>:{" "}{gote[0].messagas[0] && gote[0].messagas[0].msg}</Text>
         </div>
      );
      }
     }
    }
    
  onUsernameChange(event) {
    const profile = this.state.profile;
    profile.username = event.target.value;
    this.setState({profile: profile});
  }
  
  onFirstnameChange(event) {
    const profile = this.state.jobOffer;
    profile.firstname = event.target.value;
    this.setState({profile: profile});
  }

  onLastnameChange(event) {
    const profile = this.state.jobOffer;
    profile.lastname = event.target.value;
    this.setState({profile: profile});
  }
  onModalOpen(){
    this.props.dispatch(messageModalOpen());
  }
  onClickSave() {
    this.props.actions.createProfile(this.state.profile);
    alert(`Saving ${this.state.profile.myprofile.userId}`);
  }
  onClickAccept() {
    //debugger;
    this.props.actions.acceptCustomerConnect(this.state.customerConnect.customer_connect.id);
    alert(`Accepted ${this.state.customerConnect.friend.fullname}`);
  }
     toggleOpenModal(){
    actions.messageModalOpen(); 
  }
   toggleCloseModal(){
    this.props.dispatch(messageModalClose()); 
  }
  
  render() {
    //debugger;
    const {profile, customerConnect, actions, currentUser, myJobs, isOpen,myFriends,most_recent_offers} = this.props;
    //debugger;
    return (
      
      <Page>
        <Headers>
         <Header />
        </Headers>
        <Main>
          <Sidebar>
            <CustomerControls />
          </Sidebar>
          
          <div className="col-xs-8">
          {profile.myprofile.id && profile.myprofile.customer_type == 'employer' && !profile.myprofile.status &&
           <MyEmployerTab actions={actions} customerConnect={customerConnect}
            currentUser={currentUser} myJobs={myJobs} isOpen={isOpen} profile={profile} 
            myFriends={myFriends} fr_message={this._fr_message}/>
          }
           {profile.myprofile.id && profile.myprofile.customer_type == 'employee' && !profile.myprofile.status &&
           <MyEmployeeTab actions={actions} customerConnect={customerConnect}
            currentUser={currentUser} myJobs={myJobs} profile={profile} isOpen={isOpen}
            myFriends={myFriends} fr_message={this._fr_message} />
          }
          {profile.myprofile.id && profile.myprofile.customer_type == 'employer' && profile.myprofile.status == 'admin' &&
           <MyAdminTab actions={actions} customerConnect={customerConnect}
            currentUser={currentUser} myJobs={myJobs} profile={profile} isOpen={isOpen}
            myFriends={myFriends} fr_message={this._fr_message} most_recent_offers={most_recent_offers} />
          }
          </div>  
          <Footers>
           <Footer/>
          </Footers>
        </Main>  
      </Page>
      
    );
  }

}

CustomerProfile.propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  currentUser: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.number,
  customerConnect: PropTypes.array,
  myJobs: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  all_users: PropTypes.array.isRequired,
  most_recent_offers: PropTypes.array.isRequired,
  myFriends: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  //debugger;
  return {
    profile: state.profile,
    currentUser: state.currentUser.currentUser,
    loading: state.ajaxCallsInProgress,
    customerConnect: state.customerConnect,
    myJobs: state.myJobs,
    isOpen: state.isOpen,
    all_users: state.admin.all_users,
    most_recent_offers: state.admin.most_recent_job_offers,
    myFriends: state.myFriends
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
)(CustomerProfile);
