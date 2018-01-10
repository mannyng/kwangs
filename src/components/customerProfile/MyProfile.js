import React from 'react';
import PropTypes from 'prop-types';


const MyProfile = ({profile}) => {
  
  return (
     
      <article  className="panel panel-info">
      <header className="panel-heading">
        <div className="row">
         <div className="col-xs-6">
         <h2 className="h4">Welcome {profile.username}</h2> 
         </div>
         <div className="col-xs-6">
         <h2 className="h4">Type:  {profile.customer_type}</h2> 
         </div>
        </div> 
        </header>
                <div className="row">
                 <div className="col-xs-6">
                 <p className="h4">
                  <span className="label label-info">Firstname :</span>
                {profile.firstname}
                </p>
                </div>
                <div className="col-xs-6">
                <p className="h4">
              <span className="label label-info">Lastname :</span>
                {profile.lastname}
                </p>
                </div>
                </div>
               <div className="row">
                 <div className="col-xs-6">
                 <p className="h4">
                  <span className="label label-info">Address :</span>
                {profile.address}
                </p>
                </div>
                <div className="col-xs-6">
                <p className="h4">
              <span className="label label-info">City :</span>
                {profile.city}
                </p>
                </div>
                </div>
                 <p className="h4">
              <span className="label label-info">State :</span>
                {profile.state}
                </p>
        
        </article>
        
    );
};

MyProfile.propTypes = {
    profile: PropTypes.object.isRequired
};
export default MyProfile;