import { useState } from 'react';
import PropTypes from 'prop-types';

import useReservation from '../../../hooks/useReservation';
import SpinnerButtonLoading from '../../common/SpinnerButtonLoading';

const BoxToShowReservations = ({reservationData, reservations, setReservations}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { confirmReservation } = useReservation();

  let status = reservationData.statusReservation ? 'Confirmado' : 'Por Confirmar';
  let varColor = reservationData.statusReservation ? 'var(--day-reservated)' : 'var(--day-waiter)';
  let dataUser = reservationData.idUser[0] || {};
  let fullNameUser = `${dataUser.name} ${dataUser.lastName} ${dataUser.motherLastName}`;

  const handleConfirmReservation = () => {
    setIsLoading(true);
    confirmReservation({idReservation: reservationData.id}).then(response => {
      setIsLoading(false);
      if (response !== null) {
        let filterReservations = reservations.filter(reservation => reservation.id !== reservationData.id);
        setReservations([
          ...filterReservations,
          {
            ...reservationData,
            statusReservation: 1
          }
        ]);
      }
    });
  };

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
          onClick={ handleConfirmReservation }
          disabled={ isLoading }
        >
          { isLoading &&
            <SpinnerButtonLoading />
          }
          Confirmar Reservación
        </button>
      </div>
    }
  </div>;
};

BoxToShowReservations.propTypes = {
  reservationData: PropTypes.object,
  setReservations: PropTypes.func,
  reservations: PropTypes.array
};

export default BoxToShowReservations;