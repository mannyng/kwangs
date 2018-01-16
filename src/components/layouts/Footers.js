import React from 'react';
import PropTypes from 'prop-types';

const Footers = ({children}) => (
    <header className="row">
     {children}
    </header>
);
Footers.propTypes = {
    children: PropTypes.node
};
export default Footers;