import PropTypes from 'prop-types';

import '../../styles/styleGroupPageAnyUser.css';

import NavigationAnyUser from '../views/NavigationAnyUser';

const GroupPageAnyUser = ({children, routesNav, isAdmin = false}) => {
  return (
    <main className="container-group-pages pt-2" style={ {background: '#eeeeee'} }>
      <div id="navigation">
        <NavigationAnyUser isAdmin={ isAdmin } routesNav={ routesNav } />
      </div>
      <div className="p-md-4">
        { children }
      </div>
    </main>
  );
};

GroupPageAnyUser.propTypes = {
  children: PropTypes.node,
  routesNav: PropTypes.array.isRequired,
  isAdmin: PropTypes.bool
};

export default GroupPageAnyUser;