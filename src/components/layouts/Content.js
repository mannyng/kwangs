import React from 'react';
import PropTypes from 'prop-types';

const Content = ({children}) => (
    <div className="col-xs-6">
     {children}
    </div>
);
Content.propTypes = {
    children: PropTypes.node
};
export default Content;