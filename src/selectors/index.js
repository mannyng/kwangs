import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.visibilityFilter;
const getSecureJobs = (state) => state.secureJobs;
const getSecureRequests = (state) => state.secureRequests;
var myDate = new Date();
const myfilter = myDate.setDate(myDate.getDate() - 21);

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
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return secureRequests;
      case 'newest_employers':
        return secureRequests.filter(t => new Date(t.job_request.created_at) > myfilter);
      
    }
  }
);