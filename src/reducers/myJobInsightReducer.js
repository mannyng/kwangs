import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function myJobInsightReducer(state = initialState.myJobInsight, action) {
    switch (action.type) {
            
        case types.CREATE_JOB_INSIGHT_SUCCESS:
            //debugger;
            return { ...state, myJobInsight: action.myJobInsight};
            //return [
             //   ...state,
             //   Object.assign({}, action.myJobOffer)
             //   ];
         
         case types.UPDATE_JOB_INSIGHT_SUCCESS:
            // debugger;
             return [
                 ...state.filter(myJobInsight => myJobInsight.id !== action.myJobInsight.id),
                 Object.assign({}, action.myJobInsight)
                 ];
                 
            default:
              return state;
    }
}