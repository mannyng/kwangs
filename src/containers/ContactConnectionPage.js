import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerProfilesActions';
//import * as jobofferactions from '../actions/jobOfferActions';
//import {loadSecuredJobOfferings} from '../actions/loggedInUserSearchActions';
//import ShowJobOffer from '../components/viewSecureJob/ShowJobOffer';
import Header from '../components/universal/CustomerHeader';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';
import Headers from '../components/layouts/Headers';
import Sidebar from '../components/layouts/Sidebar';
import CustomerControls from '../components/controls/CustomerControls';
import Footers from '../components/layouts/Footers';
import Footer from '../components/universal/SecureFooter';
import SendMessage from '../components/contactConnection/SendMessage';
import {reset} from 'redux-form';

class ContactConnection extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      profile: {user_id: '', username:'', firstname:'', lastname:''},
      currentUser:  0,
      loading: 'false',
      myFriend:  {}
    };
    this.submitMessage = this.submitMessage.bind(this);
  }
 submitMessage(values){
     //debugger;
    this.props.dispatch(actions.sendMessage(this.props.profile.id,this.props.myFriend.id,values.msg));
    this.props.dispatch(reset('sendMessageForm'));  // requires form name
  }
  
  render() {
    const {profile, myFriend, myMessage} = this.props;
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
        {myFriend &&
          <p>{myFriend.username}</p>
        }
        <SendMessage profile={profile} myFriend={myFriend}
        submitMessage={this.submitMessage} myMessage={myMessage}
        />
        </div>
          <Footers>
           <Footer/>
          </Footers>
        </Main> 
       </Page>
    );
  }
  
} 

ContactConnection.propTypes = {
  actions: PropTypes.object.isRequired,
  myFriend: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  loading: PropTypes.number.isRequired,
  dispatch: PropTypes.func,
  myMessage: PropTypes.array.isRequired
};
function getMyFriendByUsername(myFriends, myFriendId) {
  //debugger;
  const myFriend = myFriends.filter(myFriend => myFriend.username == myFriendId);
  //debugger;
  if (myFriend) return myFriend[0];
  return null;
}
function mapStateToProps(state,ownProps) {
  //debugger;
  const myFriendId = ownProps.match.params.id;
  let myFriend = {username: '', firstname: '', lastname: '', city: '', state: ''};
  
  if (myFriendId && state.myFriends.length > 0 ) {
    //debugger;
    myFriend = getMyFriendByUsername(state.myFriends, myFriendId);
  }
  return {
    profile: state.profile,
    currentUser: state.currentUser.currentUser,
    loading: state.ajaxCallsInProgress,
    myFriend: myFriend,
    myMessage: state.myMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactConnection);