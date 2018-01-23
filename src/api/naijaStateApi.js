import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const stateList = [
  {
    id: 'anambra',
    name: 'Anambra'
  },
  {
    id: 'abia',
    name: 'Abia'
  },
  {
    id: 'abuja',
    name: 'Abuja'
  },
  {
    id: 'adamawa',
    name: 'Adamawa'
  },
  {
      id: 'akwa_ibom',
      name: 'Akwa Ibom'
  },
  {
      id: 'bauchi',
      name: 'Bauchi'
  },
  {
      id: 'bayelsa',
      name: 'Bayelsa'
  },
  {
      id: 'benue',
      name: 'Benue'
  },
  {
      id: 'borno',
      name: 'Borno'
  },
  {
      id: 'cross_river',
      name: 'Cross River'
  },
  {
      id: 'delta',
      name: 'Delta'
  }, 
  {
      id: 'ebonyi',
      name: 'Ebonyi'
  },
  {
      id: 'enugu',
      name: 'Enugu'
  },
  {
      id: 'edo',
      name: 'Edo'
  },
  {
      id: 'ekiti',
      name: 'Ekiti'
  },
  {
      id: 'gombe',
      name: 'Gombe'
  }, 
  {
      id: 'imo',
      name: 'Imo'
  },
  {
      id: 'jigawa',
      name: 'Jigawa'
  },
  {
      id: 'kaduna',
      name: 'Kaduna'
  },
  {
      id: 'kano',
      name: 'Kano'
  },
  {
      id: 'katsina',
      name: 'Katsina'
  }, 
  {
      id: 'kebbi',
      name: 'Kebbi'
  },
  {
      id: 'kogi',
      name: 'Kogi'
  },
  {
      id: 'kwara',
      name: 'Kwara'
  },
  {
      id: 'lagos',
      name: 'Lagos'
  },
  {
      id: 'nasarawa',
      name: 'Nasarawa'
  }, 
  {
      id: 'niger',
      name: 'Niger'
  },
  {
      id: 'ogun',
      name: 'Ogun'
  },
  {
      id: 'ondo',
      name: 'Ondo'
  },
  {
      id: 'osun',
      name: 'Osun'
  },
  {
      id: 'oyo',
      name: 'Oyo'
  }, 
  {
      id: 'plateau',
      name: 'Plateau'
  },
  {
      id: 'rivers',
      name: 'Rivers'
  },
  {
      id: 'sokoto',
      name: 'Sokoto'
  }, 
  {
      id: 'taraba',
      name: 'Taraba'
  },
  {
      id: 'yobe',
      name: 'Yobe'
  },
  {
      id: 'zamfara',
      name: 'Zamfara'
  }, 
];

//This would be performed on the server in a real app. Just stubbing in.
//const generateId = (jobCategory) => {
//  return jobCategory.name.toLowerCase();
//};

class naijaStateApi {
  static getAllNaijaLists() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], stateList));
      }, delay);
    });
  }

  

}

export default naijaStateApi;
