import React from 'react';
import PropTypes from 'prop-types';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

//debugger;
const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    //debugger;
    //defaultZoom={12} 
    //defaultCenter={{ lat: props.lat, lng: props.lng }}
         return (
           <GoogleMap 
           defaultZoom={6}
           defaultCenter={{ lat: 9.0820, lng: 8.6753 }}
             >
             <MarkerClusterer
              averageCenter
              enableRetinaIcons
              gridSize={0.001}
              >
             {props.isMarkerShown && props.markers && props.markers.map(marker => (
                <Marker
                 key={marker.job.id}
                 position={{ lat: marker.location.latitude, lng: marker.location.longitude }}
                />
              ))}
             </MarkerClusterer>
           </GoogleMap>
        );    
}));

MyMapComponent.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  markers: PropTypes.array,
};
export default MyMapComponent;