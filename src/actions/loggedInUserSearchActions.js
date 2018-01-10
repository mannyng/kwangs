import * as types from '../constants/actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


  
export function loadSecuredJobOffersSuccess(secureJobs) {
    //debugger;
    return { type: types.LOAD_SECURED_JOB_OFFERS_SUCCESS,
             secureJobs,
             receivedAt: Date.now()
    };
}

export function loadSecuredJobOfferings() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.get(`${types.ROOT_URL}/employer_posts/private_jobs/`, {headers: types.API_HEADERS })
        .then(secureJobs => {
            dispatch(loadSecuredJobOffersSuccess(secureJobs));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}


