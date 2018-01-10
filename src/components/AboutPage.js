import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about-page.css';
import Header from './universal/CustomerHeader';
import Headers from './layouts/Headers';
import Footers from './layouts/Footers';
import Footer from './universal/SecureFooter';
import Page from './layouts/Page';
import Main from './layouts/Main';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <Page>
        <Headers>
         <Header />
        </Headers>
        <Main>
        <div>
      <h2 className="alt-header">About</h2>
      <p>
        This is our response to the ongoing  call <a href="http://www.nassnig.org/">
        by every hero to contribute what we can </a>.
      </p>
      <p>
        <Link to="http://www.tonyelumelufoundation.org/">Click this this link read more </Link> about Federal grant.
      </p>
    </div>
    <Footers>
      <Footer/>
    </Footers>
        </Main>  
      </Page>
  );
};

export default AboutPage;
