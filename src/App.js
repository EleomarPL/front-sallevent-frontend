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
const NotFoundPublic = lazy(() => import('./pages/NotFoundPublic'));

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
            <Route element={ <PublicRoute /> }>
              <Route index
                element={
                  <>
                    <Helmet>
                      <title>Inicio | SallEvent</title>
                      <meta name="description" content="Salón SallEvent, renta este salón para tus eventos y poder disfrutar de ellos sin preocuparte por los arreglos, en este salón puedes rentar diferentes servicios bajo tus necesidades." />
                    </Helmet>
                    <Suspense fallback={ <SpinnerLoading /> }>
                      <Home />
                    </Suspense>
                  </>
                }
              />
              <Route path="/services"
                element={
                  <>
                    <Helmet>
                      <title>Servicios | SallEvent</title>
                      <meta name="description" content="Conoce los servicios con los que cuenta el salón SallEvent, así como también los diferentes servicios con los que cuenta y el calendario de días ya agendados." />
                    </Helmet>
                    <Suspense fallback={ <SpinnerLoading /> }>
                      <Services />
                    </Suspense>
                  </>
                }
              />
              <Route path="/contact"
                element={
                  <>
                    <Helmet>
                      <title>Contacto | SallEvent</title>
                      <meta name="description" content="Servicio incorporado de mensajes de contacto para tus dudas, quejar o sugerencias que surjan acerca del salón SallEvent como de sus servicios." />
                    </Helmet>
                    <Suspense fallback={ <SpinnerLoading /> }>
                      <Contact />
                    </Suspense>
                  </>
                }
              />
              <Route path="/register"
                element={
                  <>
                    <Helmet>
                      <title>Registrarse | SallEvent</title>
                      <meta name="description" content="Regístrate y disfruta de nuestra plataforma para poder realizar reservaciones con los servicios según tus necesidades." />
                    </Helmet>
                    <Suspense fallback={ <SpinnerLoading /> }>
                      <Register />
                    </Suspense>
                  </>
                }
              />
              <Route path="/login"
                element={
                  <>
                    <Helmet>
                      <title>Acceder | SallEvent</title>
                      <meta name="description" content="Iniciar sesión y navega por nuestra plataforma, pudiendo reservar el salón, así como también consumir nuestros servicios, asegurando su satisfacción al uso de nuestros servicios." />
                    </Helmet>
                    <Suspense fallback={ <SpinnerLoading /> }>
                      <Login />
                    </Suspense>
                  </>
                }
              />
              <Route path="*"
                element={
                  <>
                    <Helmet>
                      <title>No Encontrado | SallEvent</title>
                      <meta name="description" content="Página no encontrada en las rutas públicas." />
                    </Helmet>
                    <Suspense fallback={ <SpinnerLoading /> }>
                      <NotFoundPublic />
                    </Suspense>
                  </>
                }
              />
            </Route>
            <Route element={ <MyRouter /> }>
              <Route path="/my/*"
                element={
                  <Suspense fallback={ <SpinnerLoading /> }>
                    <IndexMy />
                  </Suspense>
                }
              />
            </Route>
            <Route element={ <AdminRouter /> }>
              <Route path="/admin/*"
                element={
                  <Suspense fallback={ <SpinnerLoading /> }>
                    <IndexAdmin />
                  </Suspense>
                }
              />
            </Route>
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