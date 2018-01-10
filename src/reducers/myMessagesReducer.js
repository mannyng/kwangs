import * as types from '../constants/actionTypes';
//import initialState from './initialState';

export default function myMessagesReducer(state = [], action) {
    switch (action.type) {
        case types.READ_MESSAGES_SUCCESS:
            debugger;
            return action.myMessages;
            
                 
            default:
              return state;
    }
}