import * as types from '../constants/actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import toastr from 'toastr';
import localStorage from 'localStorage';
import jobCategoryApi from '../api/jobCategoryApi';
import naijaStateApi from '../api/naijaStateApi';

//LOAD NAIJA STATES
export function loadStateListsSuccess(stateLists) {
    //debugger;
    return { type: types.LOAD_STATE_LISTS_SUCCESS, stateLists};
}

export function loadStateLists() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return naijaStateApi.getAllNaijaLists().then(stateLists => {
            toastr.success('Naija states successfully fetched');
            dispatch(loadStateListsSuccess(stateLists));
        }).catch(error => {
            toastr.error('There is error fetching naijastates');
            throw(error);
        });
    };
}
//LOAD JOB CATEGORIES FOR ADMIN
export function loadJobCategoriesSuccess(jobCategories) {
    //debugger;
    return { type: types.LOAD_JOB_CATEGORIES_SUCCESS, jobCategories};
}

export function loadJobCategories() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return jobCategoryApi.getAllJobCategories().then(jobCategories => {
            toastr.success('Category successfully fetched');
            dispatch(loadJobCategoriesSuccess(jobCategories));
        }).catch(error => {
            toastr.error('There is error fetching category');
            throw(error);
        });
    };
}
//FETCH MOST RECENT JOB OFFERS
export function retrieveMostRecentJobOffersSuccess(res) {
    //debugger;
    return {
        type: types.RETRIEVE_MOST_RECENT_OFFER_LIST_SUCCESS,
        list: res.data
    };
}

export function retrieveMostRecentJobOffers() {
    const mytoke = localStorage.getItem('token');
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/employer_posts/most_recent_list/`,
        {headers: MAPI_HEADERS })
        .then(res => {
            toastr.success('List successfully fetched');
            dispatch(retrieveMostRecentJobOffersSuccess(res));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with the page');
            throw(error);
        });
    };
}

//UPDATE JOB OFFER

export function adminUpdateJobOffer(id,title,description) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.put(`${types.ROOT_URL}/employer_posts/${id}`,{title,description},
         {headers: MAPI_HEADERS }).then(() => {
             toastr.success('Job updated successfully');
            dispatch(adminUpdateJobOfferSuccess("success update"));
            dispatch(retrieveMostRecentJobOffers());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with your submitted information');
            throw(error.response);
        });
    };
}
export function adminUpdateJobOfferSuccess(jobOffer) {
    //debugger;
    return { type: types.ADMIN_UPDATE_JOB_OFFER_SUCCESS, jobOffer};
}

//UPDATE JOB OFFER INSIGHT
export function adminUpdateOfferInsight(id,employer_post_id,employee_title,employee_type,employee_category,employee_experience,
          job_category,payment_type,job_duration,available_date) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.put(`${types.ROOT_URL}/employer_posts/${employer_post_id}/insights/${id}`,{employee_title,
          employee_type,employee_category,employee_experience,
          job_category,payment_type,job_duration,available_date
        },
         {headers: MAPI_HEADERS }).then(() => {
             toastr.success('Job Insight updated successfully');
            dispatch(adminUpdateOfferInsightSuccess("success update"));
            dispatch(retrieveMostRecentJobOffers());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with your submitted information');
            throw(error.response);
        });
    };
}
export function adminUpdateOfferInsightSuccess(jobOffer) {
    //debugger;
    return { type: types.ADMIN_UPDATE_OFFER_INSIGHT_SUCCESS, jobOffer};
}

//UPDATE JOB OFFER LOCATION
export function adminUpdateOfferLocation(id,employer_post_id,location,city,state) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.put(`${types.ROOT_URL}/employer_posts/${employer_post_id}/job_locations/${id}`,{location,city,state},
         {headers: MAPI_HEADERS }).then(() => {
             toastr.success('Job Location updated successfully');
            dispatch(adminUpdateOfferLocationSuccess("success update"));
            dispatch(retrieveMostRecentJobOffers());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some error/s with your submitted information');
            throw(error.response);
        });
    };
}
export function adminUpdateOfferLocationSuccess(jobOffer) {
    //debugger;
    return { type: types.ADMIN_UPDATE_OFFER_LOCATION_SUCCESS, jobOffer};
}

// CREATE JOB OFFER
export function adminCreateJobOffer(title,description,customer_id) {
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
             toastr.success('Offer created successfully');
            dispatch(createMyJobOfferSuccess(myJobOffer.data.employer_post));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some creating offer');
            throw(error.response);
        });
    };
}
export function createMyJobOfferSuccess(myJobOffer) {
    //debugger;
    return { type: types.CREATE_MY_JOB_OFFER_SUCCESS, myJobOffer};
}
//CREATE OFFER INSIGTH
export function adminSaveOfferInsight(employer_post_id,employee_title,employee_type,employee_category,employee_experience,
          job_category,pay_type,job_duration,available_date) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };    
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/employer_posts/${employer_post_id}/insights`,
        {employer_post_id,employee_title,employee_type,employee_category,employee_experience,
          job_category,pay_type,job_duration,available_date},
        {headers: MAPI_HEADERS }).then(myJobInsight => {
            toastr.success('Job insight saved successfully');
            dispatch(createInsightSuccess(myJobInsight.data.insight));
            dispatch(retrieveMostRecentJobOffers());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are some errors creating insight');
            throw(error);
        });
    };
}
export function createInsightSuccess(myJobInsight) {
    //debugger;
    return { type: types.CREATE_JOB_INSIGHT_SUCCESS, myJobInsight};
}

//CREATE OFFER LOCATION
export function adminSaveOfferLocation(employer_post_id,location,city,state) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/employer_posts/${employer_post_id}/job_locations`,
        {employer_post_id,location,city,state},
        {headers: MAPI_HEADERS }).then(myJobLocation => {
            toastr.success('Job location saved successfully');
            dispatch(createLocationSuccess(myJobLocation.data.job_location));
            dispatch(retrieveMostRecentJobOffers());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are errors creating offer location');
            throw(error);
        });
    };
}    
export function createLocationSuccess(myJobLocation) {
    //debugger;
    return { type: types.CREATE_JOB_LOCATION_SUCCESS, myJobLocation};
}

//FETCH ALL CUSTOMERS
export function adminRetrieveAllCustomersSuccess(res) {
    //debugger;
    return {
        type: types.ADMIN_RETRIEVE_ALL_CUSTOMERS_SUCCESS,
        customers: res.data
    };
}

export function adminRetrieveAllCustomers() {
    const mytoke = localStorage.getItem('token');
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers`,
        {headers: MAPI_HEADERS })
        .then(res => {
            //debugger;
            toastr.success('All customers successfully fetched');
            dispatch(adminRetrieveAllCustomersSuccess(res));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('Errors while fetching all customers');
            throw(error);
        });
    };
}

//UPDATE JOB OFFER

export function adminUpdateCustomer(id,user_id,username,firstname,lastname,address,city,state,status,latitude,
 longitude,customer_type) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.put(`${types.ROOT_URL}/customers/${id}`,{user_id,username,firstname,lastname,address,city,state,status,latitude,
 longitude,customer_type},
         {headers: MAPI_HEADERS }).then(() => {
             toastr.success('Customer updated successfully');
            dispatch(adminUpdateCustomerSuccess("success update"));
            dispatch(adminRetrieveAllCustomers());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('Error while updating customer');
            throw(error.response);
        });
    };
}
export function adminUpdateCustomerSuccess(jobOffer) {
    //debugger;
    return { type: types.ADMIN_UPDATE_JOB_OFFER_SUCCESS, jobOffer};
}

//FETCH ALL CUSTOMERS
export function adminRetrieveAllUsersSuccess(res) {
    //debugger;
    return {
        type: types.ADMIN_RETRIEVE_ALL_USERS_SUCCESS,
        users: res.data
    };
}

export function adminRetrieveAllUsers() {
    const mytoke = localStorage.getItem('token');
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers/live_users`,
        {headers: MAPI_HEADERS })
        .then(res => {
            //debugger;
            toastr.success('All users successfully fetched');
            dispatch(adminRetrieveAllUsersSuccess(res));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('Errors while fetching all users');
            throw(error);
        });
    };
}

//CREATE OFFER LOCATION
export function adminCreateCustomer(user_id,username,firstname,lastname,address,city,state,status,customer_type) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.post(`${types.ROOT_URL}/customers/`,
        {user_id,username,firstname,lastname,address,city,state,status,customer_type},
        {headers: MAPI_HEADERS }).then(res => {
            toastr.success('Customers saved successfully');
            dispatch(adminCreateCustomerSuccess(res));
            dispatch(adminRetrieveAllUsers());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('There are errors creating customer');
            throw(error);
        });
    };
}    
export function adminCreateCustomerSuccess(res) {
    //debugger;
    return { 
        type: types.ADMIN_CREATE_CUSTOMER_SUCCESS, 
        customer: res
        };
}

//FETCH RECENT REQUEST 
export function adminRetrieveRecentRequest(){
 const mytoke = localStorage.getItem('token');
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/employee_posts/recent_requests`,
        {headers: MAPI_HEADERS })
        .then(res => {
            //debugger;
            toastr.success('All users successfully fetched');
            dispatch(adminRetrieveRecentRequestsSuccess(res));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('Errors while fetching recent requests');
            throw(error);
        });
    };   
}
export function adminRetrieveRecentRequestsSuccess(res){
  //debugger;
    return {
        type: types.ADMIN_RETRIEVE_RECENT_REQUESTS_SUCCESS,
        requests: res.data
    };  
}

//UPDATE JOB OFFER

export function adminUpdateOfferRequest(id, job_category, employee_category, job_duration, pay_type, employee_type, employee_title,
 employee_experience, customer_id, description, status) {
    const mytoke = localStorage.getItem('token');
    const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoke}`
        };
    return function (dispatch) {
        dispatch(beginAjaxCall());
        //debugger;
        return axios.put(`${types.ROOT_URL}/employee_posts/${id}`,{job_category, employee_category, job_duration, pay_type, employee_type, employee_title,
 employee_experience, customer_id, description, status},
         {headers: MAPI_HEADERS }).then(() => {
             toastr.success('Offer Request updated successfully');
            dispatch(adminUpdateOfferRequestSuccess("success update"));
            dispatch(adminRetrieveRecentRequest());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            toastr.error('Error while updating offer request');
            throw(error.response);
        });
    };
}
export function adminUpdateOfferRequestSuccess(res) {
    //debugger;
    return { type: types.ADMIN_UPDATE_OFFER_REQUEST_SUCCESS, res};
}