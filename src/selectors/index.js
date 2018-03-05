import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.visibilityFilter;
const getVisibilityStateFilter = (state) => state.visibilityStateFilter;
const getVisibilityCategoryFilter = (state) => state.visibilityCategoryFilter;

const getSecureJobs = (state) => state.secureJobs;
const getSecureRequests = (state) => state.secureRequests;

const getSearchJobs = (state) => state.searchJobs;
const getSearchOffers = (state) => state.jobOffers;
const getSearchRequests = (state) => state.searchRequests;

const getStateFilter = (state) => state.searchTermFilter.state;
const getJobCategoryFilter = (state) => state.searchTermFilter.job_category;
const myDate = new Date();
const myfilter = myDate.setDate(myDate.getDate() - 201);

export const getVisibleSecureJobs = createSelector(
  [ getVisibilityFilter, getSecureJobs ],
  (visibilityFilter, secureJobs) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return secureJobs;
      case 'latest_jobs':
        return secureJobs.filter(t => new Date(t.job.created_at) > myfilter);
      case 'active_employers':
        return secureJobs.filter(t => new Date(t.customer.created_at) > myfilter);
    }
  }
);

export const getVisibleSecureRequests = createSelector(
  [ getVisibilityFilter, getSecureRequests ],
  (visibilityFilter, secureRequests) => {
    debugger;
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return secureRequests;
      case 'newest_employees':
        return secureRequests.filter(t => new Date(t.job_request.created_at) > myfilter);
      
    }
  }
);

export const getVisibleUnSecureJobs = createSelector(
  [ getVisibilityFilter, getSearchJobs ],
  (visibilityFilter, searchJobs) => {
    //debugger;
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return searchJobs;
      case 'latest_jobs':
        return searchJobs.filter(t => new Date(t.job.created_at) > myfilter);
      case 'active_employers':
        return searchJobs.filter(t => new Date(t.customer.created_at) > myfilter);
    }
  }
);

export const getVisibleUnsecureRequests = createSelector(
  [ getVisibilityFilter, getSearchRequests ],
  (visibilityFilter, searchRequests) => {
    debugger;
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return searchRequests;
      case 'newest_employees':
        return searchRequests.filter(t => new Date(t.job_request.created_at) > myfilter);
      
    }
  }
);

export const getJobByState = createSelector(
  [ getVisibilityStateFilter, getSearchJobs, getStateFilter],
  (visibilityStateFilter, searchJobs, stateFilter) => {
    debugger;
    switch (visibilityStateFilter) {
      case 'SHOW_ALL':
        return searchJobs;
      case 'job_by_state':
        return searchJobs.filter(t => t.customer.state == stateFilter);
      default:
       return searchJobs;
    }
  }
);

export const getVisibleJobOffers = createSelector(
  [ getVisibilityCategoryFilter, getJobByState, getJobCategoryFilter ],
  (visibilityCategoryFilter,visibleJobs, job_category) => {
   //debugger;
    switch (visibilityCategoryFilter) {
      case 'SHOW_ALL':
        return visibleJobs;
      case 'job_by_category':
       return  visibleJobs.filter(job => job.insight.job_category == job_category);
      default:
       return visibleJobs;
    }
  }  
);

export const getRequestByState = createSelector(
  [ getVisibilityStateFilter, getSearchRequests, getStateFilter],
  (visibilityStateFilter, searchRequests, stateFilter) => {
    //debugger;
    switch (visibilityStateFilter) {
      case 'SHOW_ALL':
        return searchRequests;
      case 'request_by_state':
        return searchRequests.filter(t => t.customer.state == stateFilter);
      default:
       return searchRequests;
    }
  }
);

export const getVisibleJobRequests = createSelector(
  [ getVisibilityCategoryFilter, getRequestByState, getJobCategoryFilter ],
  (visibilityCategoryFilter,visibleRequests, job_category) => {
   //debugger;
    switch (visibilityCategoryFilter) {
      case 'SHOW_ALL':
        return visibleRequests;
      case 'request_by_category':
       return  visibleRequests.filter(job => job.job_request.job_category == job_category);
      default:
       return visibleRequests;
    }
  }  
);