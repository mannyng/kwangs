import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.admin, action) {
	switch (action.type) {
	case types.RETRIEVE_MOST_RECENT_OFFER_LIST_SUCCESS:
			return {
			...state,
			most_recent_job_offers: action.list
			};
	case types.ADMIN_RETRIEVE_ALL_CUSTOMERS_SUCCESS:
			return {
			...state,
			all_customers: action.customers
			};	
	case types.ADMIN_RETRIEVE_ALL_USERS_SUCCESS:
			return {
			...state,
			all_users: action.users
			};	
	case types.ADMIN_RETRIEVE_RECENT_REQUESTS_SUCCESS:
			return {
			...state,
			recent_requests: action.requests
			};		
            default:
			return state;
	}
}