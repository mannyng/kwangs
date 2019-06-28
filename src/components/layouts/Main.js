import React from 'react';
import PropTypes from 'prop-types';

const Main = ({children}) => (
    <div className="row container">
     {children}
    </div>
);

Main.propTypes = {
    children: PropTypes.node
};
export default Main;