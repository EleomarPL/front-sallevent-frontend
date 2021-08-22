import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/styleGroupPageAnyUser.css';
import NavigationAnyUser from '../views/NavigationAnyUser';

const GroupPageAnyUser = ({children}) => {
  return (
    <main className="container-group-pages">
      <div id="navigation">
        <NavigationAnyUser />
      </div>
      <div className="px-md-4">
        { children }
      </div>
    </main>
  );
};

GroupPageAnyUser.propTypes = {
  children: PropTypes.node
};

export default GroupPageAnyUser;