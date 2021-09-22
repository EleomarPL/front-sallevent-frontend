import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StatusReservations = ({reservations}) => {
  const [statusReservations, setStatusReservations] = useState({
    confirmed: 0,
    notConfirmed: 0
  });
  useEffect(() => {
    let confirmedReservations = reservations.reduce((acc, currentValue) => {
      if (currentValue.statusReservation === 1) {
        return acc + 1;
      }
      return acc;
    }, 0 );
    let notConfirmedReservations = reservations.reduce((acc, currentValue) => {
      if (currentValue.statusReservation === 0) {
        return acc + 1;
      }
      return acc;
    }, 0 );

    setStatusReservations({
      confirmed: confirmedReservations || 0,
      notConfirmed: notConfirmedReservations || 0
    });
  }, [reservations]);

  return (
    <article className="w-100 mt-3">
      <div className="w-100 d-flex flex-column flex-wrap align-items-center py-2"
        style={ {boxShadow: '0 0 7px 1px #3e9fce'} }
      >
        <span className="fw-bold">{ statusReservations.confirmed }</span>
        <div className="d-flex flex-wrap align-items-center">
          <span className="calendar-week-type"
            style={ {
              backgroundColor: 'var(--day-reservated)', width: '14px', height: '14px'} }
          >
          </span>
          <span>Reservaciones confirmadas</span>
        </div>
      </div>
      <div className="w-100 d-flex flex-column flex-wrap align-items-center py-2 my-3"
        style={ {boxShadow: '0 0 7px 1px var(--day-waiter)'} }
      >
        <span className="fw-bold">{ statusReservations.notConfirmed }</span>
        <div className="d-flex flex-wrap align-items-center">
          <span className="calendar-week-type"
            style={ {
              backgroundColor: 'var(--day-waiter)', width: '14px', height: '14px'} }
          >

          </span>
          <span>Reservaciones por confirmar</span>
        </div>
      </div>
    </article>
  );
};

StatusReservations.propTypes = {
  reservations: PropTypes.array.isRequired
};

export default StatusReservations;