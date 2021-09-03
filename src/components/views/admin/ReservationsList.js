import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

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
          <DivToShowReservations
            key={ reservation.id }
            reservationData={ reservation }
          >
          </DivToShowReservations>
        )
      }
    </div>
  );
};

const DivToShowReservations = ({reservationData}) => {
  let status = reservationData.statusReservation ? 'Confirmado' : 'Por Confirmar';
  let varColor = reservationData.statusReservation ? 'var(--day-reservated)' : 'var(--day-waiter)';
  let dataUser = reservationData.idUser[0] || {};
  let fullNameUser = `${dataUser.name} ${dataUser.lastName} ${dataUser.motherLastName}`;
  return <div
    className="my-4 py-2"
    style={ {boxShadow: `0 0 7px 1px ${varColor}`, fontSize: '0.9rem'} }
  >
    <div className="d-flex flex-wrap justify-content-around">
      <div className="d-flex flex-wrap flex-column">
        <p><strong>Fecha Reservada: </strong> { reservationData.dateReservationStart } </p>
        <p><strong>Salón: </strong> SallEvent </p>
        <p>
          <strong>Estado: </strong>
          <u className="fw-bold">{ status }</u>
        </p>
      </div>
      <div className="d-flex flex-wrap flex-column">
        <p><strong>Usuario: </strong>{ dataUser.userName }</p>
        <p><strong>Nombre del cliente: </strong>{ fullNameUser }</p>
        <p><strong>No Teléfonico: </strong>{ dataUser.phone }</p>
        <p><strong>Email: </strong>{ dataUser.email }</p>
      </div>
    </div>
    { reservationData.statusReservation === 0 &&
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-warning"
        >
          Confirmar Reservación
        </button>
      </div>
    }
  </div>;
};

DivToShowReservations.propTypes = {
  reservationData: PropTypes.object
};
ReservationsList.propTypes = {
  reservations: PropTypes.array.isRequired,
  setReservations: PropTypes.func.isRequired,
  reservationsToSearcher: PropTypes.string.isRequired
};

export default ReservationsList;