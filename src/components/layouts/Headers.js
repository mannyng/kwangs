import React from 'react';
import PropTypes from 'prop-types';

const Headers = ({children}) => (
    <footer className="row container">
     {children}
    </footer>
);

Headers.propTypes = {
    children: PropTypes.node
};
export default Headers;