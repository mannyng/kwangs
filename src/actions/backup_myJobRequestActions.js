import * as types from '../constants/actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import localStorage from 'localStorage';

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
        return axios.get(`${types.ROOT_URL}/employee_posts/public_requests/`,
        {headers: MAPI_HEADERS })
        .then(jobRequests => {
            dispatch(loadJobRequestSuccess(jobRequests.data));
        }).catch(error => {
            dispatch(ajaxCallError());
            throw(error);
        });
    };
}

export function saveJobRequest(employee_post) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/employee_posts`,{employee_post},
         {headers: types.API_HEADERS }).then(jobRequest => {
            jobRequest.id ? dispatch(updateJobRequestSuccess(jobRequest)) :
            dispatch(createJobRequestSuccess(jobRequest));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
