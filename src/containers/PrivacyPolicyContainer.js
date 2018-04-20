import React from 'react';
//import { Link } from 'react-router-dom';
import '../styles/about-page.css';
import Header from '../components/universal/CustomerHeader';
import Headers from '../components/layouts/Headers';
import Footers from '../components/layouts/Footers';
import Footer from '../components/universal/SecureFooter';
import Page from '../components/layouts/Page';
import Main from '../components/layouts/Main';

// Since this component is simple and static, there's no parent container for it.
const PrivacyPolicy = () => {
  return (
    <Page>
        <Headers>
         <Header />
        </Headers>
        <Main>
        <div>
      <h4 className="alt-header">Provider: <b>This application</b></h4>
      <h5>Purpose: <b>Registration and authentication</b></h5>
      <h5><b>Personal Data collected:</b></h5>
       <ul>
         <li>Email address</li>
         <li>Password</li>
         <li>First name</li>
         <li>Last name</li>
         <li>Address</li>
         <li>Cookies</li>
       </ul>
      <p>
        <b>Privacy Policy</b>{" "}
        Auth0 is a registration and authentication service library provided by Auth0. To simplify the registration 
        and authentication process, we make use of this third-party Auth0 identity providers library and save the 
        information on our platform.
      </p>
      
    </div>
    <br/>
    <div>
      <h4 className="alt-header">Provider: <b>This application</b></h4>
      <h5>Purpose: <b>Location-based interactions</b></h5>
      <h5>Personal Data collected:<b>Geographic position</b></h5>
      
      <p>
        <b>Privacy Policy</b>{" "}
        This Application may collect, use, and share User location Data in order to provide location-based 
        services.<br/>
        Most browsers and devices provide tools to opt out from this feature by default. If explicit 
        authorization has been provided, the User’s location data may be tracked by this Application.
      </p>
      
    </div>
    <Footers>
      <Footer/>
    </Footers>
        </Main>  
      </Page>
  );
};

export default PrivacyPolicy;
