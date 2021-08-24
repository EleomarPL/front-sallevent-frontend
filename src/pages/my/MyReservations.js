import React, { useEffect, useState } from 'react';

import ButtonGoToNewReservation from '../../components/buttons/ButtonGoToNewReservation';
import ButtonTableReservations from '../../components/buttons/ButtonTableReservations';
import SpinnerLoading from '../../components/common/SpinnerLoading';
import useReservation from '../../hooks/useReservation';

const MyReservations = () => {
  const [listReservations, setListReservations] = useState([]);
  const [totalReservations, setTotalReservations] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);

  const {getReservationsUser} = useReservation();

  useEffect(() => {
    setIsLoading(true);
    getReservationsUser().then(response => {
      if (response !== null)
        setListReservations(response);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    const total = listReservations.reduce((acc, currentValue) => acc + currentValue.priceTotal, 0);
    setTotalReservations(total);
  }, [listReservations]);

  const getCurrentDate = () => {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    let day = ('0' + currentDate.getDate()).slice(-2);

    return `${day}/${month}/${year}`;
  };

  return (
    <section className="col-md-12">
      <div className="border border-dark">
        <div className="my-3">
          <div className="d-flex flex-wrap flex-row-reverse justify-content-around mb-3" style={ {fontSize: '1.2rem'} }>
            <p>{ getCurrentDate() }</p>
            <div className="d-flex flex-wrap justify-content-between">
              <p style={ {marginRight: '0.5rem'} }>Salon de eventos:</p>
              <p>SallEvent</p>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center" style={ {fontSize: '1.2rem'} }>
            <p style={ {marginRight: '0.5rem'} }>Descripcion:</p>
            <p>SallEvent</p>
          </div>
          <div className="table-responsive" style={ {maxWidth: '100vw'} }>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th>Nombre del evento</th>
                  <th>Fecha</th>
                  <th>Precio</th>
                  <th>Modificar</th>
                  <th>Eliminar</th>
                  <th>Ver estado</th>
                </tr>
              </thead>
              <tbody>
                { listReservations &&
                  listReservations.map(data =>
                    <tr
                      key={ data.id }
                    >
                      <td>{ data.typeEvent }</td>
                      <td>{ data.dateReservationStart.split('T')[0] }</td>
                      <td>{ data.priceTotal }</td>
                      <td>
                        <ButtonTableReservations onClick={ () => console.log('modificar') }>
                          Modificar
                        </ButtonTableReservations>
                      </td>
                      <td>
                        <ButtonTableReservations onClick={ () => console.log('eliminar') }>
                          Eliminar
                        </ButtonTableReservations>
                      </td>
                      <td>
                        <ButtonTableReservations onClick={ () => console.log('estado') }>
                          Estado
                        </ButtonTableReservations>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
            { isLoading &&
              <SpinnerLoading />
            }
          </div>
          <div className="w-75 d-flex flex-wrap justify-content-end" style={ {fontSize: '1.2rem'} }>
            <p style={ {marginRight: '0.5rem'} }>Total:</p>
            <p className="text-danger fw-bold">{ totalReservations }</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center my-4">
        <ButtonGoToNewReservation />
      </div>
    </section>
  );
};

export default MyReservations;