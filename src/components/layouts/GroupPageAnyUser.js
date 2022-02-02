import PropTypes from 'prop-types';
import {Outlet} from 'react-router-dom';

import '../../styles/styleGroupPageAnyUser.css';

import NavigationAnyUser from '../views/NavigationAnyUser';

const GroupPageAnyUser = ({routesNav, isAdmin = false}) => {
  return (
    <main className="container-group-pages pt-2" style={ {background: '#eeeeee'} }>
      <div id="navigation">
        <NavigationAnyUser isAdmin={ isAdmin } routesNav={ routesNav } />
      </div>
      <div className="p-md-4">
        <Outlet />
      </div>
    </main>
  );
};

GroupPageAnyUser.propTypes = {
  routesNav: PropTypes.array.isRequired,
  isAdmin: PropTypes.bool
};

export default GroupPageAnyUser;