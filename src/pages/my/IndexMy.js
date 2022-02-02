import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import GroupPageAnyUser from '../../components/layouts/GroupPageAnyUser';
import { ReservationProvider } from '../../contexts/ReservationUser';
import ValidateBookUser from '../../components/router/ValidateBookUser';
import ValidateWithoutUserReservation from '../../components/router/ValidateWithoutUserReservation';
import ValidateReservationUser from '../../components/router/ValidateReservationUser';
import ValidateUpdateBookUser from '../../components/router/ValidateUpdateBookUser';
import SpinnerLoading from '../../components/common/SpinnerLoading';

const MyReservations = lazy(() => import('./MyReservations'));
const Settings = lazy(() => import('./Settings'));
const Calendar = lazy(() => import('./Calendar'));
const Book = lazy(() => import('./Book'));
const Reservation = lazy(() => import('./Reservation'));
const UpdateBook = lazy(() => import('./UpdateBook'));

import { routesNav } from '../../data/my/routes';

const Index = () => {
  return (
    <ReservationProvider>
      <Routes>
        <Route element={ <GroupPageAnyUser routesNav={ routesNav } /> }>
          <Route index
            element={
              <ValidateWithoutUserReservation>
                <Helmet>
                  <title>Configuración | my</title>
                  <meta name="description" content="Leer o modificar los datos del usuario, cambiando datos o credenciales para mayor comodidad." />
                </Helmet>
                <Suspense fallback={ <SpinnerLoading /> }>
                  <Settings />
                </Suspense>
              </ValidateWithoutUserReservation>
            }
          />
          <Route path="my-reservations"
            element={
              <ValidateWithoutUserReservation>
                <Helmet>
                  <title>Mis reservaciones | my</title>
                  <meta name="description" content="Leer, modificar y eliminar las reservaciones con las que cuente, para así tener un control de las mismas reservaciones agendadas por el usuario." />
                </Helmet>
                <Suspense fallback={ <SpinnerLoading /> }>
                  <MyReservations />
                </Suspense>
              </ValidateWithoutUserReservation>
            }
          />
          <Route path="calendar"
            element={
              <ValidateWithoutUserReservation>
                <Helmet>
                  <title>Calendario | my</title>
                  <meta name="description" content="Calendario con las fechas de reservaciones agendadas, así como también seleccionar la fecha deseada y reservar el salón." />
                </Helmet>
                <Suspense fallback={ <SpinnerLoading /> }>
                  <Calendar />
                </Suspense>
              </ValidateWithoutUserReservation>
            }
          />
        </Route>
        <Route path="book"
          element={
            <ValidateBookUser>
              <Helmet>
                <title>Reservar | my</title>
                <meta name="description" content="Agendar una reservación con el tipo de evento, horario preferido y servicios a la necesidad del tipo de evento y del usuario." />
              </Helmet>
              <Suspense fallback={ <SpinnerLoading /> }>
                <Book />
              </Suspense>
            </ValidateBookUser>
          }
        />
        <Route path="reservation"
          element={
            <ValidateReservationUser>
              <Helmet>
                <title>Estado Reservación | my</title>
                <meta name="description" content="Ver el estado de la reservación del usuario, conociendo el total, tipo de evento, cantidad de horas contratadas, datos del cliente y estado de la reservación." />
              </Helmet>
              <Suspense fallback={ <SpinnerLoading /> }>
                <Reservation />
              </Suspense>
            </ValidateReservationUser>
          }
        />
        <Route path="update-book"
          element={
            <ValidateUpdateBookUser>
              <Helmet>
                <title>Actualizar Reservación | my</title>
                <meta name="description" content="Actualizar reservación, pudiendo cambiar el tipo de evento, evento preferido y servicios con las que ya se había intentado reservar." />
              </Helmet>
              <Suspense fallback={ <SpinnerLoading /> }>
                <UpdateBook />
              </Suspense>
            </ValidateUpdateBookUser>
          }
        />
      </Routes>
    </ReservationProvider>
  );
};

export default Index;