import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import jobCategories from './jobCategoryReducer';
import jobOffers from './jobOffersReducer';
import job_offer from './jobOfferReducer';
import myJobOffer from './myJobOfferReducer';
import myJobInsight from './myJobInsightReducer';
import myJobLocation from './myJobLocationReducer';
import myJobs from './myJobsReducer';
import authReducer from './authReducer';
import profile from './customerProfilesReducer';
import currentUser from './currentUserReducer';
import customerConnect from './customerConnectReducer';
import secureJobs from './loggedInUserSearchReducer';
import myMessages from './myMessagesReducer';
import myMessage from './myMessageReducer';
import isOpen from './messageModalReducer';
import myFriends from './myFriendsReducer';
import myPoint from './myPointReducer';
import cnvtBtwn from './conversationBetweenReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  jobOffers,
  job_offer,
  profile,
  customerConnect,
  currentUser,
  secureJobs,
  jobCategories,
  myJobOffer,
  myJobInsight,
  myJobLocation,
  myJobs,
  myMessage,
  myMessages,
  myFriends,
  myPoint,
  cnvtBtwn,
  routing: routerReducer,
  ajaxCallsInProgress,
  isOpen
});

export default rootReducer;
