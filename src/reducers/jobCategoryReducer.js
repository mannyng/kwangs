import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function jobCategoryReducer(state = initialState.jobCategories, action) {
    switch (action.type) {
        case types.LOAD_JOB_CATEGORIES_SUCCESS:
            //debugger;
            return action.jobCategories;
            
            default:
              return state;
    }
}