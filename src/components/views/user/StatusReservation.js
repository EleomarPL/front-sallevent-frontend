import { useContext } from 'react';

import ReservationUser from '../../../contexts/ReservationUser';

const StatusReservation = () => {
  const {dataReservation} = useContext(ReservationUser);
  let dataReservationToRender = {
    'Horas contratadas': dataReservation.timeEnd - dataReservation.timeStart,
    'Hora Inicio': `${dataReservation.timeStart}:00:00 horas`,
    'Hora Final': `${dataReservation.timeEnd}:00:00 horas`
  };
  return (
    <div className="col-md-12">
      <div className="col-md-12 d-flex flex-wrap justify-content-center mb-4">
        <h1 style={ {fontSize: 'calc(1.325rem + .9vw)', marginRight: '0.5rem'} }>Evento: </h1>
        <h2>{ dataReservation.typeEvent }</h2>
      </div>
      <div className="table-responsive" style={ {maxWidth: '90vw'} }>
        <table className="w-100">
          <tbody>
            { dataReservationToRender &&
          Object.keys(dataReservationToRender).map(key =>
            <tr
              key={ key }
            >
              <td style={ {paddingBottom: '1rem'} }> { key }: </td>
              <td style={ {paddingBottom: '1rem'} } className="text-danger">
                { dataReservationToRender[key] }
              </td>
            </tr>
          )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusReservation;