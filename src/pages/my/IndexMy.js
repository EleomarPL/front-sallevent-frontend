import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';

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

const Index = () => {
  return (
    <ReservationProvider>
      <BrowserRouter>
        <Switch>
          <MyRouter exact path="/my/book">
            <ValidateBookUser>
              <Book />
            </ValidateBookUser>
          </MyRouter>
          <MyRouter exact path="/my/reservation">
            <ValidateReservationUser>
              <Reservation />
            </ValidateReservationUser>
          </MyRouter>
          <GroupPageAnyUser>
            <Switch>
              <MyRouter exact path="/my/my-reservations">
                <ValidateWithoutUserReservation>
                  <MyReservations />
                </ValidateWithoutUserReservation>
              </MyRouter>
              <MyRouter exact path="/my/calendar">
                <ValidateWithoutUserReservation>
                  <Calendar />
                </ValidateWithoutUserReservation>
              </MyRouter>
              <MyRouter exact path="/my">
                <ValidateWithoutUserReservation>
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