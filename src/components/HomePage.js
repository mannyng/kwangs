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
  //debugger;
  return (
    
     
     <article>
      <div className="col-xs-7">
       
      <h2>Unskilled Jobs near you</h2>
       {myPoint.myPoint.latitude && 
          <MyMapComponent
           lat={myPoint.myPoint.latitude}
           lng={myPoint.myPoint.longitude}
           isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpBsAOEHp25wXfjHnX80E3YfkZBkhNsJU&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
          />
       }
      </div>
      <aside className="col-xs-5">
        <ASignup />
      </aside> 
      </article>
      
        
      
   
  );
};
HomePage.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
};

export default HomePage;
