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

const HomePage = (myPoint) => {
    //const fstpic = "https://s9.postimg.org/q67mp9mhb/unnamed.jpg";
  
  return (
    
     
     <article>
      <div className="col-xs-9" id="front_map">
       {myPoint.myPoint.country_name !== "Nigeria" &&
       <div>
       <h4>You are not in Nigeria</h4>
       <h5>Unskilled Jobs near {myPoint.myPoint.region_name}{' '}{myPoint.myPoint.country_name}</h5>
       </div>
       }
      {myPoint.myPoint.country_name == "Nigeria" &&
      <h5>Unskilled Jobs near {' '}{myPoint.myPoint.region_name}{' '} </h5>
      }
       {myPoint.myPoint.latitude && myPoint.jobOffers && 
          <MyMapComponent
           lat={myPoint.myPoint.latitude}
           lng={myPoint.myPoint.longitude}
           markers={myPoint.jobOffers}
           isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpBsAOEHp25wXfjHnX80E3YfkZBkhNsJU&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
          />
       }
      </div>
      
      <aside className="col-xs-3" id="front_register">
        <ASignup />
        
      </aside> 
     
      </article>
      
        
      
   
  );
};
HomePage.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  myPoint: PropTypes.object
};

export default HomePage;
