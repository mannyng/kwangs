import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import Page from './layouts/Page';
//import Main from './layouts/Main';
//import Content from './layouts/Content';
//import Headers from './layouts/Headers';
//import Sidebar from './layouts/Sidebar';
//import Header from './universal/CustomerHeader';
import MyMapComponent from './homepage/google-maps';

import ASignup from './auth/Asignup';

const HomePage = ({myPoint,jobOffers,authd}) => {
    //const fstpic = "https://s9.postimg.org/q67mp9mhb/unnamed.jpg";
  //debugger;
  return (
    
     
     <article>
      <div className="col-xs-9" id="front_map">
       {myPoint.country_name !== "Nigeria" &&
       <div>
       <h4>You are not in Nigeria</h4>
       <h5>Jobs near {myPoint.region_name}{' '}{myPoint.country_name}</h5>
       </div>
       }
      {myPoint.country_name == "Nigeria" &&
      <h5>Jobs near {' '}{myPoint.region_name}{' '} </h5>
      }
       {myPoint.latitude && jobOffers && 
          <MyMapComponent
           lat={myPoint.latitude}
           lng={myPoint.longitude}
           markers={jobOffers}
           isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpBsAOEHp25wXfjHnX80E3YfkZBkhNsJU&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
          />
       }
      </div>
      
     {!authd && <aside className="col-xs-3" id="front_register">
        <ASignup />
        
      </aside> }
     
      </article>
      
        
      
   
  );
};
HomePage.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  myPoint: PropTypes.object,
  authd: PropTypes.bool.isRequired,
  jobOffers: PropTypes.array.isRequired
};

export default HomePage;
