import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import GroupPageAnyUser from '../../components/layouts/GroupPageAnyUser';
import AdminRouter from '../../components/router/AdminRouter';

import {routesNav} from '../../data/admin/routes';

const IndexAdmin = () => {
  return (
    <BrowserRouter>
      <GroupPageAnyUser routesNav={ routesNav } isAdmin={ true } >
        <Switch>
          <AdminRouter exact path="/admin/clients">
            <p>Clientes</p>
          </AdminRouter>
          <AdminRouter exact path="/admin/books">
            <p>Reservaciones</p>
          </AdminRouter>
          <AdminRouter exact path="/admin/services">
            <p>Servicios</p>
          </AdminRouter>
          <AdminRouter exact path="/admin/room">
            <p>Salón</p>
          </AdminRouter>
          <AdminRouter exact path="/admin/">
            <p>Datos personales</p>
          </AdminRouter>
        </Switch>
      </GroupPageAnyUser>
    </BrowserRouter>
  );
};

export default IndexAdmin;