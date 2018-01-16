import React from 'react';
import PropTypes from 'prop-types';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

//debugger;
const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    //debugger;
         return (
           <GoogleMap defaultZoom={12} 
           defaultCenter={{ lat: props.lat, lng: props.lng }}
             >
             {props.isMarkerShown && 
                <Marker position={{ lat: props.lat, lng: props.lng }} />
             }
            </GoogleMap>
        );    
}));

MyMapComponent.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
};
export default MyMapComponent;