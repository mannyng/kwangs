import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import Page from './layouts/Page';
//import Main from './layouts/Main';
//import Content from './layouts/Content';
//import Headers from './layouts/Headers';
//import Sidebar from './layouts/Sidebar';
//import Header from './universal/CustomerHeader';
import MyMapComponent from './google-maps';

//import ASignup from './auth/Asignup';

const HomePage = (myPoint) => {
  //debugger;
  return (
    
     
     <article>
      <div className="col-xs-10" id="front_map">
       
      <h2>Jobs near you</h2>
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
       
      </article>
      
        
      
   
  );
};
HomePage.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  myPoint: PropTypes.object
};

export default HomePage;
