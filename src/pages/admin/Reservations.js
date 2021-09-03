import React, { useEffect, useState } from 'react';
import SearcherReservations from '../../components/views/admin/SearcherReservations';

import StatusReservations from '../../components/views/admin/StatusReservations';
import useReservation from '../../hooks/useReservation';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [reservationsToSearcher, setReservationsToSearcher] = useState('all');
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
      <SearcherReservations
        reservationsToSearcher={ reservationsToSearcher }
        setReservationsToSearcher={ setReservationsToSearcher }
      />
    </section>
  );
};

export default Reservations;