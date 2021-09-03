import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import BoxToShowReservations from './BoxToShowReservations';

const ReservationsList = ({reservations, setReservations, reservationsToSearcher}) => {
  const [reservationsToShow, setReservationsToShow] = useState([]);
  useEffect(() => {
    switch (reservationsToSearcher) {
    case 'all':
      setReservationsToShow(reservations);
      break;
    case 'confirmed':
      setReservationsToShow(reservations.filter(reservation => reservation.statusReservation === 1));
      break;
    case 'notConfirmed':
      setReservationsToShow(reservations.filter(reservation => reservation.statusReservation === 0));
      break;
    }
  }, [reservationsToSearcher, reservations]);
  return (
    <div className="container-fluid">
      { reservationsToShow &&
        reservationsToShow.map(reservation =>
          <BoxToShowReservations
            key={ reservation.id }
            reservationData={ reservation }
            reservations={ reservations }
            setReservations={ setReservations }
          />
        )
      }
    </div>
  );
};

ReservationsList.propTypes = {
  reservations: PropTypes.array.isRequired,
  setReservations: PropTypes.func.isRequired,
  reservationsToSearcher: PropTypes.string.isRequired
};

export default ReservationsList;