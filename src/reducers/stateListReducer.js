import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function stateListReducer(state = initialState.stateLists, action) {
    switch (action.type) {
        case types.LOAD_STATE_LISTS_SUCCESS:
            //debugger;
            return action.stateLists;
            
            default:
              return state;
    }
}