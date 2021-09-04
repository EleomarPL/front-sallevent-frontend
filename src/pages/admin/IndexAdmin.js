import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import GroupPageAnyUser from '../../components/layouts/GroupPageAnyUser';
import AdminRouter from '../../components/router/AdminRouter';
import PersonalInformation from './PersonalInformation';
import Clients from './Clients';
import Reservations from './Reservations';
import Services from './Services';
import Room from './Room';

import {routesNav} from '../../data/admin/routes';

const IndexAdmin = () => {
  return (
    <BrowserRouter>
      <GroupPageAnyUser routesNav={ routesNav } isAdmin={ true } >
        <Switch>
          <AdminRouter exact path="/admin/clients">
            <Clients />
          </AdminRouter>
          <AdminRouter exact path="/admin/books">
            <Reservations />
          </AdminRouter>
          <AdminRouter exact path="/admin/services">
            <Services />
          </AdminRouter>
          <AdminRouter exact path="/admin/room">
            <Room />
          </AdminRouter>
          <AdminRouter exact path="/admin/">
            <PersonalInformation />
          </AdminRouter>
        </Switch>
      </GroupPageAnyUser>
    </BrowserRouter>
  );
};

export default IndexAdmin;