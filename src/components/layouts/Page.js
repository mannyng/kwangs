import React from 'react';
import PropTypes from 'prop-types';

const Page = ({children}) => (
    <main className="container">
     {children}
    </main>
);
Page.propTypes = {
    children: PropTypes.node
};
export default Page;