import * as types from '../constants/actionTypes';
import jobCategoryApi from '../api/jobCategoryApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadJobCategoriesSuccess(jobCategories) {
    debugger;
    return { type: types.LOAD_JOB_CATEGORIES_SUCCESS, jobCategories};
}

export function loadJobCategories() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return jobCategoryApi.getAllJobCategories().then(jobCategories => {
            dispatch(loadJobCategoriesSuccess(jobCategories));
        }).catch(error => {
            throw(error);
        });
    };
}