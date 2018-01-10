import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function customerConnectReducer(state = initialState.customerConnect, action) {
    switch (action.type) {
                 
        case types.FETCH_CUSTOMER_CONNECT_SUCCESS:
            //debugger;
            return action.customerConnect;
            
        case types.CREATE_CUSTOMER_CONNECT_SUCCESS:
            //debugger;
            return [
                ...state,
                Object.assign({}, action.customerConnect)
                ];
         
         case types.UPDATE_CUSTOMER_CONNECT_SUCCESS:
            // debugger;
             return [
                 ...state.filter(customerConnect => customerConnect.id !== action.customerConnect.id),
                 Object.assign({}, action.customerConnect)
                 ];           
                 
         case types.RESET_CUSTOMER_CONNECT:
             //debugger;
             return initialState.customerConnect; 
             
            default:
              return state;
    }
}