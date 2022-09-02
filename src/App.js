import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './contexts/Auth';
import PublicRoute from './components/router/PublicRouter';
import AdminRouter from './components/router/AdminRouter';
import MyRouter from './components/router/MyRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import SpinnerLoading from './components/common/SpinnerLoading';

const Home = lazy(() => import('./pages/public/Home'));
const Services = lazy(() => import('./pages/public/Services'));
const Contact = lazy(() => import('./pages/public/Contact'));
const Register = lazy(() => import('./pages/public/Register'));
const Login = lazy(() => import('./pages/public/Login'));
const IndexMy = lazy(() => import('./pages/my/IndexMy'));
const IndexAdmin = lazy(() => import('./pages/admin/IndexAdmin'));

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
        <main style={ {minHeight: '80vh'} }>
          <Routes>
            <Route index
              element={
                <PublicRoute>
                  <Helmet>
                    <title>Inicio | SallEvent</title>
                    <meta name="description" content="Salón SallEvent, renta este salón para tus eventos y poder disfrutar de ellos sin preocuparte por los arreglos, en este salón puedes rentar diferentes servicios bajo tus necesidades." />
                  </Helmet>
                  <Suspense fallback={ <SpinnerLoading /> }>
                    <Home />
                  </Suspense>
                </PublicRoute>
              }
            />
            <Route path="/services"
              element={
                <PublicRoute>
                  <Helmet>
                    <title>Servicios | SallEvent</title>
                    <meta name="description" content="Conoce los servicios con los que cuenta el salón SallEvent, así como también los diferentes servicios con los que cuenta y el calendario de días ya agendados." />
                  </Helmet>
                  <Suspense fallback={ <SpinnerLoading /> }>
                    <Services />
                  </Suspense>
                </PublicRoute>
              }
            />
            <Route path="/contact"
              element={
                <PublicRoute>
                  <Helmet>
                    <title>Contacto | SallEvent</title>
                    <meta name="description" content="Servicio incorporado de mensajes de contacto para tus dudas, quejar o sugerencias que surjan acerca del salón SallEvent como de sus servicios." />
                  </Helmet>
                  <Suspense fallback={ <SpinnerLoading /> }>
                    <Contact />
                  </Suspense>
                </PublicRoute>
              }
            />
            <Route path="/register"
              element={
                <PublicRoute>
                  <Helmet>
                    <title>Registrarse | SallEvent</title>
                    <meta name="description" content="Regístrate y disfruta de nuestra plataforma para poder realizar reservaciones con los servicios según tus necesidades." />
                  </Helmet>
                  <Suspense fallback={ <SpinnerLoading /> }>
                    <Register />
                  </Suspense>
                </PublicRoute>
              }
            />
            <Route path="/login"
              element={
                <PublicRoute>
                  <Helmet>
                    <title>Acceder | SallEvent</title>
                    <meta name="description" content="Iniciar sesión y navega por nuestra plataforma, pudiendo reservar el salón, así como también consumir nuestros servicios, asegurando su satisfacción al uso de nuestros servicios." />
                  </Helmet>
                  <Suspense fallback={ <SpinnerLoading /> }>
                    <Login />
                  </Suspense>
                </PublicRoute>
              }
            >
            </Route>
            <Route path="/my/*"
              element={
                <MyRouter>
                  <Suspense fallback={ <SpinnerLoading /> }>
                    <IndexMy />
                  </Suspense>
                </MyRouter>
              }
            />
            <Route path="/admin/*"
              element={
                <AdminRouter>
                  <Suspense fallback={ <SpinnerLoading /> }>
                    <IndexAdmin />
                  </Suspense>
                </AdminRouter>
              }
            />
          </Routes>
        </main>
        <Footer />
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