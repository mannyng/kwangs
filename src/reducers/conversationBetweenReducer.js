import * as types from '../constants/actionTypes';

export default function conversationBetweenReducer(state = {}, action) {
    switch (action.type) {
            
        case types.CONVERSATION_BETWEEN_SUCCESS:
            return action.cnvtBtwn;
            
                default:
              return state;
    }
}        