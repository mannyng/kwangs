import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function messageModalReducer(state = initialState.isOpen, action) {
    switch (action.type) {
        case types.MESSAGE_MODAL_OPEN:
            //debugger;
            //let isOpen = true;
            return { isOpen: true}; 
            
         case types.MESSAGE_MODAL_CLOSE:
             //debugger;
             return initialState.isOpen;
             
            default:
              return state;
    }
}