import { useEffect, useState } from 'react';
import SpinnerLoading from '../../components/common/SpinnerLoading';

import ReservationsList from '../../components/views/admin/ReservationsList';
import SearcherReservations from '../../components/views/admin/SearcherReservations';
import StatusReservations from '../../components/views/admin/StatusReservations';
import useReservation from '../../hooks/useReservation';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [reservationsToSearcher, setReservationsToSearcher] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const { getAllReservations } = useReservation();

  useEffect(() => {
    setIsLoading(true);
    setReservations([]);
    getAllReservations().then(response => {
      setIsLoading(false);
      if (response !== null) {
        setReservations(response);
      }
    });
  }, [reservationsToSearcher]);
  return (
    <section className="container-fluid">
      <h1 style={ {fontSize: '1.8rem'} } className="text-center">Reservaciones</h1>
      <StatusReservations reservations={ reservations } />
      <SearcherReservations
        reservationsToSearcher={ reservationsToSearcher }
        setReservationsToSearcher={ setReservationsToSearcher }
      />
      <ReservationsList
        reservations={ reservations }
        setReservations={ setReservations }
        reservationsToSearcher={ reservationsToSearcher }
      />
      { isLoading &&
        <SpinnerLoading />
      }
    </section>
  );
};

export default Reservations;