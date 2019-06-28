import React from 'react';
import PropTypes from 'prop-types';

const Footers = ({children}) => (
    <header className="row container">
     {children}
    </header>
);
Footers.propTypes = {
    children: PropTypes.node
};
export default Footers;