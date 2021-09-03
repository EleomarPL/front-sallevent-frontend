import React, { useState } from 'react';

import StatusReservations from '../../components/views/admin/StatusReservations';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  return (
    <section className="container-fluid">
      <h1 style={ {fontSize: '1.8rem'} } className="text-center">Reservaciones</h1>
      <StatusReservations reservations={ reservations } />
    </section>
  );
};

export default Reservations;