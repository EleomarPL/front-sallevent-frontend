import React, { useEffect, useState } from 'react';

import StatusReservations from '../../components/views/admin/StatusReservations';
import useReservation from '../../hooks/useReservation';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const {getAllReservations} = useReservation();

  useEffect(() => {
    getAllReservations().then(response => {
      if (response !== null) {
        setReservations(response);
      }
    });
  }, []);
  return (
    <section className="container-fluid">
      <h1 style={ {fontSize: '1.8rem'} } className="text-center">Reservaciones</h1>
      <StatusReservations reservations={ reservations } />
    </section>
  );
};

export default Reservations;