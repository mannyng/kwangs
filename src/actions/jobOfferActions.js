import * as types from '../constants/actionTypes';
//import courseApi from '../api/mockCourseApi';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
//import localStorage from 'localStorage';

//const ROOT_URL = 'http://fen-pi-kofian.c9users.io';
//debugger;
//const mytoke = localStorage.getItem('token');
//const API_HEADERS = {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${mytoke}`
//  };
  
export const setVisibilityFilter = filter => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
};

export function setSearchTermFilter(search_term) {
    return {
        type: types.SET_SEARCH_TERM_FILTER,
        search_term
    };
}

export const setStateVisibilityFilter = filter => {
  return {
    type: types.SET_STATE_VISIBILITY_FILTER,
    filter
  };
};

export const setCategoryVisibilityFilter = filter => {
  return {
    type: types.SET_CATEGORY_VISIBILITY_FILTER,
    filter
  };
};
export function searchAllJobsSuccess(allJobs) {
    //debugger;
    return { 
        type: types.SEARCH_ALL_JOBS_SUCCESS, 
        allJobs
    };
}
export function searchAllRequestsSuccess(allRequests) {
    //debugger;
    return { 
        type: types.SEARCH_ALL_REQUESTS_SUCCESS, 
        allRequests
    };
}
export function showJobOfferSuccess(job_offer) {
    //debugger;
    return { type: types.SHOW_JOB_OFFER_SUCCESS, job_offer};
}

export function calculateJobAvailability(avail_jobs) {
    //debugger;
    return { type: types.CALCULATE_JOB_AVAILABILITY, avail_jobs};
}

export function createInsightSuccess(insight) {
    //debugger;
    return { type: types.CREATE_JOB_INSIGHT_SUCCESS, insight};
}

export function updateInsightSuccess(insight) {
    //debugger;
    return { type: types.UPDATE_JOB_INSIGHT_SUCCESS, insight};
}

export function createLocationSuccess(location) {
    //debugger;
    return { type: types.CREATE_JOB_LOCATION_SUCCESS, location};
}

export function updateLocationSuccess(location) {
    //debugger;
    return { type: types.UPDATE_JOB_LOCATION_SUCCESS, location};
}

export function searchAllJobs(history) {
    return function (dispatch) {
        //debugger;
        return axios.get(`${types.ROOT_URL}/employer_posts/`).then(allJobs => {
            //debugger;
          dispatch(searchAllJobsSuccess(allJobs)); 
          history.push('/search_results');
        }).catch(error => {
            dispatch(ajaxCallError(error));
        });   
    };
}

export function searchAllRequests(history) {
    return function (dispatch) {
        //debugger;
        return axios.get(`${types.ROOT_URL}/employee_posts/public_requests`).then(allRequests => {
            //debugger;
          dispatch(searchAllRequestsSuccess(allRequests)); 
          history.push('/search_results');
        }).catch(error => {
            dispatch(ajaxCallError(error));
        });   
    };
}

export function showJobOffer(jobId) {
    return function (dispatch) {
        //debugger;
        return axios.get(`${types.ROOT_URL}/employer_posts/${jobId}`, {headers: types.API_HEADERS }).then(job_offer => {
            //debugger;
          dispatch(showJobOfferSuccess(job_offer)); 
        }).catch(error => {
            dispatch(ajaxCallError(error));
        });   
    };
}
 

export function saveJobInsight(insight) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/employer_posts/${insight.employer_post_id}/insights`,{insight},{headers: types.API_HEADERS }).then(jobInsight => {
            jobInsight.id ? dispatch(updateInsightSuccess(jobInsight)) :
            dispatch(createInsightSuccess)(jobInsight);
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function showJobInsight(jobId) {
    return function (dispatch) {
        //debugger;
        return axios.get(`${types.ROOT_URL}/employer_posts/${jobId}`, {headers: types.API_HEADERS }).then(jobInsight => {
          dispatch(showJobOfferSuccess)(jobInsight); 
        }).catch(error => {
            dispatch(ajaxCallError(error));
        });   
    };
}

export function saveJobLocation(job_location) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/employer_posts/${job_location.employer_post_id}/job_locations`,{job_location},{headers: types.API_HEADERS }).then(jobLocation => {
            jobLocation.id ? dispatch(updateLocationSuccess(jobLocation)) :
            dispatch(createLocationSuccess)(jobLocation);
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}