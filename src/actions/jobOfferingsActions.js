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
  
export function loadJobOffersSuccess(jobOffers) {
    //debugger;
    return { type: types.LOAD_JOB_OFFERS_SUCCESS,
             jobOffers,
             //jobOffers: jobOffers.data.children.map(child => child.data),
             receivedAt: Date.now()
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

export function createJobOfferSuccess(jobOffer) {
    //debugger;
    return { type: types.CREATE_JOB_OFFER_SUCCESS, jobOffer};
}

export function updateJobOfferSuccess(jobOffer) {
    //debugger;
    return { type: types.UPDATE_JOB_OFFER_SUCCESS, jobOffer};
}

export function createJobOffer(jobOffer) {
    //debugger;
    return { type: types.CREATE_JOB_OFFER, jobOffer};
}

export function loadJobOfferings() {
    return function(dispatch) {
        //dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/employer_posts/public_jobs/`)
        .then(jobOffers => {
            dispatch(loadJobOffersSuccess(jobOffers));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveJobOffer(employer_post) {
    return function (dispatch) {
        //dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/employer_posts`,{employer_post},
         {headers: types.API_HEADERS }).then(jobOffer => {
            jobOffer.id ? dispatch(updateJobOfferSuccess(jobOffer)) :
            dispatch(createJobOfferSuccess)(jobOffer);
        }).catch(error => {
            //dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function showJobOffer(jobId) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/employer_posts/${jobId}`, {headers: types.API_HEADERS }).then(job_offer => {
          dispatch(showJobOfferSuccess)(job_offer); 
        }).catch(error => {
            dispatch(ajaxCallError(error));
        });   
    };
}
