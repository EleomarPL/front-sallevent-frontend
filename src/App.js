import React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import { AuthProvider } from './contexts/Auth';
import PublicRoute from './components/router/PublicRouter';
import AdminRouter from './components/router/AdminRouter';
import MyRouter from './components/router/MyRouter';
import Header from './components/Header';

import Home from './pages/public/Home';
import Contact from './pages/public/Contact';
import Register from './pages/public/Register';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';
import 'react-toastify/dist/ReactToastify.css';

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
            <Contact />
          </PublicRoute>
          <PublicRoute path="/register">
            <Helmet>
              <title>Registrarse | SallEvent</title>
            </Helmet>
            <Register />
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
        <ToastContainer position="top-right"
          autoClose={ 5000 } hideProgressBar={ false }
          newestOnTop={ false } closeOnClick
          rtl={ false } pauseOnFocusLoss
          draggable={ false } pauseOnHover
        />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;