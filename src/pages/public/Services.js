import React, { Suspense } from 'react';

import SpinnerLoading from '../../components/common/SpinnerLoading';

const SomeServices = React.lazy(() => import('../../components/views/SomeServices'));

const Services = () => {
  return (
    <section className="container-fluid p-lg-4">
      <h4 className="font-weight-bold mb-3">Prestamos servicios para diferentes tipos de eventos</h4>
      <Suspense fallback={ <SpinnerLoading /> }>
        <SomeServices />
      </Suspense>
    </section>
  );
};

export default Services;