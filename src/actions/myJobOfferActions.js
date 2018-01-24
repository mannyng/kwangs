import * as types from '../constants/actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import localStorage from 'localStorage';
import toastr from 'toastr';

export function showMyJobsSuccess(myJobs) {
   // debugger;
    return { type: types.SHOW_MY_JOB_SUCCESS,
             myJobs,
             //jobOffers: jobOffers.data.children.map(child => child.data),
             receivedAt: Date.now()
    };
}

export function calculateJobAvailability(avail_jobs) {
    //debugger;
    return { type: types.CALCULATE_JOB_AVAILABILITY, avail_jobs};
}

export function createMyJobOfferSuccess(myJobOffer) {
    //debugger;
    return { type: types.CREATE_MY_JOB_OFFER_SUCCESS, myJobOffer};
}

export function updateMyJobOfferSuccess(myJobOffer) {
    //debugger;
    return { type: types.UPDATE_MY_JOB_OFFER_SUCCESS, myJobOffer};
}



export function saveMyJobOffer(title,description,customer_id) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
       // debugger;
        return axios.post(`${types.ROOT_URL}/employer_posts`,{title,description,customer_id},
         {headers: MAPI_HEADERS }).then(myJobOffer => {
             toastr.success('Job saved successfully');
            myJobOffer.id ? dispatch(updateMyJobOfferSuccess(myJobOffer)) :
            dispatch(createMyJobOfferSuccess(myJobOffer.data.employer_post));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with your submitted information');
            throw(error.response);
        });
    };
}

export function showMyJobs(user_id) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.get(`${types.ROOT_URL}/customers/${user_id}/myposts`, 
        {headers: MAPI_HEADERS }).then(myJobs=> {
          dispatch(showMyJobsSuccess(myJobs.data)); 
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with the page');
            throw(error);
        });   
    };
}



export function createInsightSuccess(myJobInsight) {
    //debugger;
    return { type: types.CREATE_JOB_INSIGHT_SUCCESS, myJobInsight};
}

export function updateInsightSuccess(myJobInsight) {
    //debugger;
    return { type: types.UPDATE_JOB_INSIGHT_SUCCESS, myJobInsight};
}

export function createLocationSuccess(myJobLocation) {
    //debugger;
    return { type: types.CREATE_JOB_LOCATION_SUCCESS, myJobLocation};
}

export function updateLocationSuccess(myJobLocation) {
    //debugger;
    return { type: types.UPDATE_JOB_LOCATION_SUCCESS, myJobLocation};
}

export function saveJobInsight(job_category,employee_category,job_duration,pay_type,employee_type,
    employee_title,employee_experience,employer_post_id) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };    
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/employer_posts/${employer_post_id}/insights`,
        {job_category,employee_category,job_duration,pay_type,employee_type,
    employee_title,employee_experience,employer_post_id},
        {headers: MAPI_HEADERS }).then(myJobInsight => {
            toastr.success('Job insight saved successfully');
            myJobInsight.id ? dispatch(updateInsightSuccess(myJobInsight)) :
            dispatch(createInsightSuccess(myJobInsight.data.insight));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with your submitted information');
            throw(error);
        });
    };
}


export function saveJobLocation(location,city,state,employer_post_id) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/employer_posts/${employer_post_id}/job_locations`,
        {location,city,state,employer_post_id},
        {headers: MAPI_HEADERS }).then(myJobLocation => {
            toastr.success('Job location saved successfully');
            myJobLocation.id ? dispatch(updateLocationSuccess(myJobLocation)) :
            dispatch(createLocationSuccess(myJobLocation.data.job_location));
            dispatch(loadSecuredJobOfferings());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with your submitted information');
            throw(error);
        });
    };
}    

export function createJobRequestSuccess(jobRequest) {
    //debugger;
    return { type: types.CREATE_JOB_REQUEST_SUCCESS, jobRequest};
}

export function loadJobRequestSuccess(jobRequests) {
    //debugger;
    return { type: types.LOAD_JOB_REQUEST_SUCCESS, jobRequests};
}

export function updateJobRequestSuccess(jobRequest) {
    //debugger;
    return { type: types.UPDATE_JOB_REQUEST_SUCCESS, jobRequest};
}

export function loadJobRequests() {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/employee_posts/`,
        {headers: MAPI_HEADERS })
        .then(jobRequests => {
            //debugger;
            dispatch(loadJobRequestSuccess(jobRequests.data));
        }).catch(error => {
            dispatch(ajaxCallError());
            toastr.error('There are some error/s with the page');
            throw(error);
        });
    };
}

export function saveJobRequest(job_category,employee_category,job_duration,pay_type,employee_type,
    employee_title,employee_experience,description,customer_id) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/employee_posts`,
        {job_category,employee_category,job_duration,pay_type,employee_type,
    employee_title,employee_experience,description,customer_id},
         {headers: MAPI_HEADERS }).then(jobRequest => {
            toastr.success('Job request saved successfully');
            //debugger;
            jobRequest.id ? dispatch(updateJobRequestSuccess(jobRequest)) :
            dispatch(createJobRequestSuccess(jobRequest));
            dispatch(loadJobRequests());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with your submitted information');
            throw(error);
        });
    };
}

export function loadSecuredJobOffersSuccess(secureJobs) {
    //debugger;
    return { type: types.LOAD_SECURED_JOB_OFFERS_SUCCESS,
             secureJobs,
             receivedAt: Date.now()
    };
}

export function loadSecuredJobOfferings() {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function(dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.get(`${types.ROOT_URL}/employer_posts/private_jobs/`, {headers: MAPI_HEADERS })
        .then(secureJobs => {
            dispatch(loadSecuredJobOffersSuccess(secureJobs));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with the page');
            throw(error);
        });
    };
}
