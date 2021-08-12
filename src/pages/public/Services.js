import React, { Suspense } from 'react';

import CardMessageCalendar from '../../components/cards/CardMessageCalendar';
import SpinnerLoading from '../../components/common/SpinnerLoading';
import CalendarReservations from '../../components/views/CalendarReservations';

const SomeServices = React.lazy(() => import('../../components/views/SomeServices'));

const Services = () => {
  return (
    <section className="container-fluid p-lg-4">
      <CardMessageCalendar />
      <div className="col-lg-12 pb-3 mt-1">
        <div className="col-lg-6">
          <CalendarReservations />
        </div>
      </div>
      <h4 className="font-weight-bold mb-3">Prestamos servicios para diferentes tipos de eventos</h4>
      <Suspense fallback={ <SpinnerLoading /> }>
        <SomeServices />
      </Suspense>
    </section>
  );
};

export default Services;