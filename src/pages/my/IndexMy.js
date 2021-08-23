import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';

import GroupPageAnyUser from '../../components/layouts/GroupPageAnyUser';
import MyRouter from '../../components/router/MyRouter';
import Settings from './Settings';

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <GroupPageAnyUser>
          <Switch>
            <MyRouter exact path="/my/my-reservations">
              <p>mis reservaciones</p>
            </MyRouter>
            <MyRouter exact path="/my/calendar">
              <p>calendario</p>
            </MyRouter>
            <MyRouter exact path="/my/">
              <Settings />
            </MyRouter>
          </Switch>
        </GroupPageAnyUser>
      </BrowserRouter>
    </>
  );
};

export default Index;