import * as types from '../constants/actionTypes';
//import initialState from './initialState';

export default function myMessageReducer(state = {}, action) {
    switch (action.type) {
            
        case types.SEND_MESSAGE_SUCCESS:
            //debugger;
            return { ...state, myMessage: action.myMessage};
            
                 
            default:
              return state;
    }
}