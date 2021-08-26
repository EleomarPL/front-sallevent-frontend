import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';

import GroupPageAnyUser from '../../components/layouts/GroupPageAnyUser';
import MyRouter from '../../components/router/MyRouter';
import MyReservations from './MyReservations';
import Settings from './Settings';
import Calendar from './Calendar';
import { ReservationProvider } from '../../contexts/ReservationUser';
import ValidateBookUser from '../../components/router/ValidateBookUser';
import Book from './Book';

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
          <GroupPageAnyUser>
            <Switch>
              <MyRouter exact path="/my/my-reservations">
                <MyReservations />
              </MyRouter>
              <MyRouter exact path="/my/calendar">
                <Calendar />
              </MyRouter>
              <MyRouter exact path="/my">
                <Settings />
              </MyRouter>
            </Switch>
          </GroupPageAnyUser>
        </Switch>
      </BrowserRouter>
    </ReservationProvider>
  );
};

export default Index;