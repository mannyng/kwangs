export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  currentUser: 0,
  jobOffers: [],
  jobCategories: [],
  stateLists: [],
  ajaxCallsInProgress: 0,
  profile: {
    myprofile: 
    {username: '', 
    firstname: '', 
    lastname: '',
    customer_type: '', 
    address: '', 
    city: '', 
    state: '', 
    country: '', 
    user_id: 0,
    status: '',
    id: ''
  },
  myconvos: 
  [{
    id: '',
    sender_id: '',
    recipient_id: '',
    created_at: '',
    updated_at: ''
  }],
  status: ''
  },
    customerConnect:[{
      customer_connect:{
        customer_id: '',
        friend_id: '',
        id: '',
        msg: '',
        state: '',
        subject: ''
        },
        friend:{},
        customer:{}
      }],
  myJobOffer: {myJobOffer:{
    id: '',
    title: '',
    description: ''
  }},    
  job_offer: [{
    title: '',
    description: '', 
    status: '', 
    customer_id: 0,
    insight: {
      available_date: '',
      job_category: '',
      employee_category: '', 
      job_duration: '',
      pay_type: '', 
      employee_type: '',
      employee_title: '', 
      employer_post_id: '',
      employee_experience: '',
      status: ''
    },
    location: {
      location: '',
      city: '',
      state: '',
      employer_post_id: '',
      status: '' 
    }
  }],
  myJobInsight: {myJobInsight:{
      id: '',
      available_date: '',
      job_category: '',
      employee_category: '', 
      job_duration: '',
      pay_type: '', 
      employee_type: '',
      employee_title: '', 
      employer_post_id: '',
      employee_experience: '',
      status: ''
    }},
    myJobLocation: {myJobLocation:{
      id: '',
      location: '',
      city: '',
      state: '',
      employer_post_id: '',
      status: '' 
    }},
  secureJobs: [],
  isOpen: false ,
  myFriends: [{
    username: '', 
    firstname: '', 
    lastname: '',
    customer_type: '', 
    address: '', 
    city: '', 
    state: '', 
    country: '', 
    user_id: 0,
    status: ''
  }],
  secureRequests: [{
    id: '', 
    job_category: '', 
    employee_category: '', 
    job_duration: '', 
    pay_type: '', 
    employee_type: '', 
    employee_title: '', 
    employee_experience: '', 
    customer_id: '', 
    description: '', 
    status: '', 
    created_at: '', 
    updated_at: ''
  }]
  
};
 