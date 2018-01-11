import React from 'react';
import { Link } from 'react-router-dom';
//import Page from './layouts/Page';
//import Main from './layouts/Main';
//import Content from './layouts/Content';
//import Headers from './layouts/Headers';
//import Sidebar from './layouts/Sidebar';
//import Header from './universal/CustomerHeader';

import ASignup from './auth/Asignup';

const HomePage = () => {
  return (
    
     
     <article>
      <div className="col-xs-7">
       
      <h1>Unskilled Jobs</h1>
       
      <h2>For Nigerians</h2>
      <ol>
        <li>Register and sign in to <Link to="/profile">view app</Link></li>
        <li>Working on UI/UX for this frontpage</li>
      </ol>
      </div>
      <aside className="col-xs-5">
        <ASignup />
      </aside> 
      </article>
      
        
      
   
  );
};

export default HomePage;
