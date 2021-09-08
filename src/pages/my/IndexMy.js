import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import GroupPageAnyUser from '../../components/layouts/GroupPageAnyUser';
import MyRouter from '../../components/router/MyRouter';
import MyReservations from './MyReservations';
import Settings from './Settings';
import Calendar from './Calendar';
import { ReservationProvider } from '../../contexts/ReservationUser';
import ValidateBookUser from '../../components/router/ValidateBookUser';
import ValidateWithoutUserReservation from '../../components/router/ValidateWithoutUserReservation';
import ValidateReservationUser from '../../components/router/ValidateReservationUser';
import Book from './Book';
import Reservation from './Reservation';
import ValidateUpdateBookUser from '../../components/router/ValidateUpdateBookUser';
import UpdateBook from './UpdateBook';
import {routesNav} from '../../data/my/routes';

const Index = () => {
  return (
    <ReservationProvider>
      <BrowserRouter>
        <Switch>
          <MyRouter exact path="/my/book">
            <ValidateBookUser>
              <Helmet>
                <title>Reservar | my</title>
                <meta name="description" content="Agendar una reservación con el tipo de evento, horario preferido y servicios a la necesidad del tipo de evento y del usuario." />
              </Helmet>
              <Book />
            </ValidateBookUser>
          </MyRouter>
          <MyRouter exact path="/my/reservation">
            <ValidateReservationUser>
              <Helmet>
                <title>Estado Reservación | my</title>
                <meta name="description" content="Ver el estado de la reservación del usuario, conociendo el total, tipo de evento, cantidad de horas contratadas, datos del cliente y estado de la reservación." />
              </Helmet>
              <Reservation />
            </ValidateReservationUser>
          </MyRouter>
          <MyRouter exact path="/my/update-book">
            <ValidateUpdateBookUser>
              <Helmet>
                <title>Actualizar Reservación | my</title>
                <meta name="description" content="Actualizar reservación, pudiendo cambiar el tipo de evento, evento preferido y servicios con las que ya se había intentado reservar." />
              </Helmet>
              <UpdateBook />
            </ValidateUpdateBookUser>
          </MyRouter>
          <GroupPageAnyUser routesNav={ routesNav }>
            <Switch>
              <MyRouter exact path="/my/my-reservations">
                <ValidateWithoutUserReservation>
                  <Helmet>
                    <title>Mis reservaciones | my</title>
                    <meta name="description" content="Leer, modificar y eliminar las reservaciones con las que cuente, para así tener un control de las mismas reservaciones agendadas por el usuario." />
                  </Helmet>
                  <MyReservations />
                </ValidateWithoutUserReservation>
              </MyRouter>
              <MyRouter exact path="/my/calendar">
                <ValidateWithoutUserReservation>
                  <Helmet>
                    <title>Calendario | my</title>
                    <meta name="description" content="Calendario con las fechas de reservaciones agendadas, así como también seleccionar la fecha deseada y reservar el salón." />
                  </Helmet>
                  <Calendar />
                </ValidateWithoutUserReservation>
              </MyRouter>
              <MyRouter exact path="/my">
                <ValidateWithoutUserReservation>
                  <Helmet>
                    <title>Configuración | my</title>
                    <meta name="description" content="Leer o modificar los datos del usuario, cambiando datos o credenciales para mayor comodidad." />
                  </Helmet>
                  <Settings />
                </ValidateWithoutUserReservation>
              </MyRouter>
            </Switch>
          </GroupPageAnyUser>
        </Switch>
      </BrowserRouter>
    </ReservationProvider>
  );
};

export default Index;