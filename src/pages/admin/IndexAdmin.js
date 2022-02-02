import {Suspense, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import GroupPageAnyUser from '../../components/layouts/GroupPageAnyUser';
import SpinnerLoading from '../../components/common/SpinnerLoading';

const PersonalInformation = lazy(() => import('./PersonalInformation'));
const Clients = lazy(() => import('./Clients'));
const Reservations = lazy(() => import('./Reservations'));
const Services = lazy(() => import('./Services'));
const Room = lazy(() => import('./Room'));
const Contact = lazy(() => import('./Contact'));

import { routesNav } from '../../data/admin/routes';

const IndexAdmin = () => {
  return (
    <Routes>
      <Route element={ <GroupPageAnyUser routesNav={ routesNav } isAdmin={ true } /> }>
        <Route index
          element={
            <>
              <Helmet>
                <title>Configuración | admin</title>
                <meta name="description" content="Leer o modificar los datos del administrador, cambiando datos o credenciales para mayor comodidad." />
              </Helmet>
              <Suspense fallback={ <SpinnerLoading /> }>
                <PersonalInformation />
              </Suspense>
            </>
          }
        />
        <Route path="clients"
          element={
            <>
              <Helmet>
                <title>Clientes | admin</title>
                <meta name="description" content="Buscar usuarios de la plataforma del salón SallEvent, y realizar modificaciones de datos, así como también eliminar cuentas." />
              </Helmet>
              <Suspense fallback={ <SpinnerLoading /> }>
                <Clients />
              </Suspense>
            </>
          }
        />
        <Route path="books"
          element={
            <>
              <Helmet>
                <title>Reservaciones | admin</title>
                <meta name="description" content="Revise todas las reservaciones y confirme reservaciones agendadas para así dar a conocer al cliente que su reservación está en preparación." />
              </Helmet>
              <Suspense fallback={ <SpinnerLoading /> }>
                <Reservations />
              </Suspense>
            </>
          }
        />
        <Route path="services"
          element={
            <>
              <Helmet>
                <title>Servicios | admin</title>
                <meta name="description" content="Crear y modificar servicios con los que cuenta este salón SallEvent, y así estas puedan ser visibles para los clientes." />
              </Helmet>
              <Suspense fallback={ <SpinnerLoading /> }>
                <Services />
              </Suspense>
            </>
          }
        />
        <Route path="room"
          element={
            <>
              <Helmet>
                <title>Salón | admin</title>
                <meta name="description" content="Verifique o actualice los datos del salón SallEvent, mostrando datos del mismo salón, dirección y horario de servicio de este." />
              </Helmet>
              <Suspense fallback={ <SpinnerLoading /> }>
                <Room />
              </Suspense>
            </>
          }
        />
        <Route path="contact"
          element={
            <>
              <Helmet>
                <title>Mensajes Contacto | admin</title>
                <meta name="description" content="Leer o eliminar todos los mensajes de contacto que han escrito sobre el salón SallEvent." />
              </Helmet>
              <Suspense fallback={ <SpinnerLoading /> }>
                <Contact />
              </Suspense>
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default IndexAdmin;