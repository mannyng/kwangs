import React from 'react';
import { Link } from 'react-router-dom';
import Page from './layouts/Page';
import Main from './layouts/Main';
import Content from './layouts/Content';
import Headers from './layouts/Headers';
import Sidebar from './layouts/Sidebar';
import Header from './universal/CustomerHeader';
import MyDemo from './MyDemo';
import ASignup from './auth/Asignup';

const HomePage = () => {
  return (
    
     
     <Main>
      <div className="col-xs-7">
       
      <h1>React Slingshot</h1>
       <MyDemo />
      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/profile">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
      </div>
      <aside className="col-xs-5">
        <ASignup />
      </aside> 
      </Main>
      
        
      
   
  );
};

export default HomePage;
