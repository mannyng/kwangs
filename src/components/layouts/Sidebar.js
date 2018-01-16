import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({children}) => (
    <aside className="col-xs-3">
     {children}
    </aside>
);
Sidebar.propTypes = {
    children: PropTypes.node
};

export default Sidebar;