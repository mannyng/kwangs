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
  const imagePreviewUrl = "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/icbh6TKXXL6Q/v1/800x-1.jpg";
  return (
    <Page>
        <Headers>
         <Header />
        </Headers>
        <Main>
        <div>
      <h2 className="alt-header">About</h2>
      <p>
        Kwangala Job Network is here helping Nigerians navigate through and <a href="http://www.nassnig.org/">
        connecting </a> people to instant job and workers across the nation.
      </p>
      <p>
        <Link to="http://www.tonyelumelufoundation.org/">Click this this link read more </Link> about Federal grant.
      </p>
      <img src={imagePreviewUrl} />
    </div>
    <Footers>
      <Footer/>
    </Footers>
        </Main>  
      </Page>
  );
};

export default AboutPage;
