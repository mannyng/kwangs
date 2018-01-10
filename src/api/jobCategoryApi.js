import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const jobCategories = [
  {
    id: 'construction',
    name: 'Construction'
  },
  {
    id: 'sales',
    name: 'Sales'
  },
  {
    id: 'care-giver',
    name: 'Care Giver'
  },
  {
      id: 'security',
      name: 'Security'
  },
  {
      id: 'farmer',
      name: 'Farm Work'
  },
  {
      id: 'driver',
      name: 'Driver'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (jobCategory) => {
  return jobCategory.name.toLowerCase();
};

class jobCategoryApi {
  static getAllJobCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], jobCategories));
      }, delay);
    });
  }

  

}

export default jobCategoryApi;
