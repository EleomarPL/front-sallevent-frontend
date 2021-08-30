import React, { useContext } from 'react';

import DataUser from '../../components/views/user/DataUser';
import StatusReservation from '../../components/views/user/StatusReservation';
import ReservationUser from '../../contexts/ReservationUser';
import ButtonBackBook from '../../components/buttons/ButtonBackBook';
import ButtonGoToReservations from '../../components/buttons/ButtonGoToReservations';

const Reservation = () => {
  const {dataReservation} = useContext(ReservationUser);
  return (
    <section className="container-fluid p-md-3">
      <div className="col-md-12 border border-dark">
        <div className="d-flex flex-wrap justify-content-around align-items-center">
          <div className="col-md-5 p-2 mb-2">
            <StatusReservation />
          </div>
          <div className="col-md-5 p-2 mb-2">
            <h2 className="col-md-12 text-center mb-4">Datos del cliente</h2>
            <DataUser />
          </div>
        </div>
        <div className="mt-4 mx-md-3">
          <p>
            Total a pagar:
            <span className="text-danger" style={ {marginLeft: '1rem'} }>
              { dataReservation.priceTotal }
            </span>
          </p>
          <p>
            Estado:
            <span className="text-danger" style={ {marginLeft: '1rem'} }>
              { dataReservation.statusReservation === 0 ? 'En espera' : 'Confirmado' }
            </span>
          </p>
        </div>
      </div>
      <div className="my-2 d-flex flex-wrap justify-content-around">
        <ButtonBackBook to="/my/calendar" text="Aceptar y salir" />
        <ButtonGoToReservations />
      </div>
    </section>
  );
};

export default Reservation;