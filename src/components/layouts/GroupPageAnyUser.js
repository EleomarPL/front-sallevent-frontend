import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/styleGroupPageAnyUser.css';

import NavigationAnyUser from '../views/NavigationAnyUser';

const GroupPageAnyUser = ({children, routesNav}) => {
  return (
    <main className="container-group-pages pt-2" style={ {background: '#eeeeee'} }>
      <div id="navigation">
        <NavigationAnyUser isAdmin={ false } routesNav={ routesNav } />
      </div>
      <div className="p-md-4">
        { children }
      </div>
    </main>
  );
};

GroupPageAnyUser.propTypes = {
  children: PropTypes.node,
  routesNav: PropTypes.array.isRequired
};

export default GroupPageAnyUser;