import * as types from '../constants/actionTypes';

export default function myPointReducer(state = {}, action) {
    switch (action.type) {
            
        case types.LOAD_MY_POINT_SUCCESS:
            return action.myPoint;
            
                default:
              return state;
    }
}        