import React, { Suspense } from 'react';

import CardMessageCalendar from '../../components/cards/CardMessageCalendar';
import SpinnerLoading from '../../components/common/SpinnerLoading';
import CalendarReservations from '../../components/views/CalendarReservations';
import StructureQuotation from '../../components/layouts/StructureQuotation';

const SomeServices = React.lazy(() => import('../../components/views/SomeServices'));


const Services = () => {
  return (
    <section className="container-fluid p-lg-4">
      <CardMessageCalendar />
      <div className="w-100 row mx-0 mb-3 mt-1" style={ {background: '#EEEEEE', borderRadius: '5px'} }>
        <div className="col-lg-5 px-0">
          <CalendarReservations />
        </div>
        <div className="col-lg-7 px-2">
          <StructureQuotation>

          </StructureQuotation>
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