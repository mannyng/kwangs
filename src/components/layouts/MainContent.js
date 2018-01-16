import React from 'react';
import PropTypes from 'prop-types';

const MainContent = ({children}) => (
    <div className="col-xs-9">
     {children}
    </div>
);
MainContent.propTypes = {
    children: PropTypes.node
};
export default MainContent;