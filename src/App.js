import React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch } from 'react-router-dom';

import { AuthProvider } from './contexts/Auth';
import PublicRoute from './components/router/PublicRouter';
import AdminRouter from './components/router/AdminRouter';
import MyRouter from './components/router/MyRouter';
import Header from './components/Header';

import Home from './pages/public/Home';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';

import './styles/index.css';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <PublicRoute exact path="/">
            <Helmet>
              <title>Inicio | SallEvent</title>
            </Helmet>
            <Home />
          </PublicRoute>
          <PublicRoute path="/services">
            <Helmet>
              <title>Servicios | SallEvent</title>
            </Helmet>
            <p>Servicios</p>
          </PublicRoute>
          <PublicRoute path="/contact">
            <Helmet>
              <title>Contacto | SallEvent</title>
            </Helmet>
            <p>Contacto</p>
          </PublicRoute>
          <PublicRoute path="/register">
            <Helmet>
              <title>Registrarse | SallEvent</title>
            </Helmet>
            <p>Registrarse</p>
          </PublicRoute>
          <PublicRoute path="/login">
            <Helmet>
              <title>Acceder | SallEvent</title>
            </Helmet>
            <p>Acceder</p>
          </PublicRoute>
          <MyRouter path="/my">
            <Helmet>
              <title>My | SallEvent</title>
            </Helmet>
            <p>Usuario</p>
          </MyRouter>
          <AdminRouter path="/admin">
            <Helmet>
              <title>Admin | SallEvent</title>
            </Helmet>
            <p>Administrador</p>
          </AdminRouter>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;