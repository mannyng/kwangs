import * as types from '../constants/actionTypes';
import naijaStateApi from '../api/naijaStateApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadStateListsSuccess(stateLists) {
    //debugger;
    return { type: types.LOAD_STATE_LISTS_SUCCESS, stateLists};
}

export function loadStateLists() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return naijaStateApi.getAllNaijaLists().then(stateLists => {
            dispatch(loadStateListsSuccess(stateLists));
        }).catch(error => {
            throw(error);
        });
    };
}