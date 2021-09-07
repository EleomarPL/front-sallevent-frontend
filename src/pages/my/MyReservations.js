import React, { Suspense, useContext, useEffect, useState } from 'react';

import ButtonGoToNewReservation from '../../components/buttons/ButtonGoToNewReservation';
import ButtonTableReservations from '../../components/buttons/ButtonTableReservations';
import SpinnerButtonLoading from '../../components/common/SpinnerButtonLoading';
import SpinnerLoading from '../../components/common/SpinnerLoading';
import useReservation from '../../hooks/useReservation';
import {openModalDeleteReservationUser} from '../../components/modals/ModalDeleteReservationUser';
import ReservationUser from '../../contexts/ReservationUser';

const ModalDeleteReservationUser = React.lazy(() => import('../../components/modals/ModalDeleteReservationUser'));

const MyReservations = () => {
  const [listReservations, setListReservations] = useState([]);
  const [totalReservations, setTotalReservations] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingSpecificButtonState, setLoadingSpecificButtonState] = useState('');
  const [loadingUpdateButtonState, setLoadingUpdateButtonState] = useState('');

  const [idReservation, setIdReservation] = useState(null);
  const {getReservationsUser, getOnlyReservation, getReservation} = useReservation();
  const {setDataReservation} = useContext(ReservationUser);

  useEffect(() => {
    setIsLoading(true);
    getReservationsUser().then(response => {
      if (response !== null)
        setListReservations(response);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    let total = listReservations.reduce((acc, currentValue) => acc + currentValue.priceTotal, 0);
    total = parseFloat(total).toFixed(4);
    setTotalReservations(total);
  }, [listReservations]);

  const getCurrentDate = () => {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    let day = ('0' + currentDate.getDate()).slice(-2);

    return `${day}/${month}/${year}`;
  };
  const handleUpdateReservation = (id) => {
    setLoadingUpdateButtonState(id);
    getReservation({idReservation: id}).then(response => {
      setLoadingUpdateButtonState('');
      let DataToApplyContext = {
        isUpdateBook: true,
        id: response.id,
        typeEvent: response.typeEvent,
        timeStart: response.timeStart,
        timeEnd: response.timeEnd,
        dateYYMMDD: response.dateYYMMDD,
        priceTotal: response.priceTotal,
        statusReservation: response.statusReservation,
        listServices: response.listServices
      };
      let repairTimeStart = response.timeStart > 12 ? response.timeStart - 12 : response.timeStart;
      let repairTimeEnd = response.timeEnd > 12 ? response.timeEnd - 12 : response.timeEnd;
      let dataToQuotation = {
        typeEvent: response.typeEvent,
        starttime: {
          time: repairTimeStart === '00' ? 12 : repairTimeStart,
          timetable: response.timeStart >= 12 ? 'pm' : 'am'
        },
        finaltime: {
          time: repairTimeEnd,
          timetable: response.timeEnd >= 12 ? 'pm' : 'am'
        },
        total: response.priceTotal
      };
      response.listServices.forEach(service => {
        dataToQuotation[service.id] = service.amountService;
      });
      window.localStorage.setItem('dataQuotationAlternative', JSON.stringify(dataToQuotation));
      window.localStorage.setItem('dataReservation', JSON.stringify(DataToApplyContext));
      setDataReservation(DataToApplyContext);
    });
  };

  const handleDeleteReservation = (id) => {
    setIdReservation(id);
    openModalDeleteReservationUser();
  };

  const handleViewStatusReservation = (id) => {
    setLoadingSpecificButtonState(id);
    getOnlyReservation({idReservation: id}).then(response => {
      if (response !== null) {
        setLoadingSpecificButtonState('');
        let dataToContext = {
          typeEvent: response.typeEvent,
          timeStart: response.dateReservationStart.split('T')[1].split(':')[0],
          timeEnd: response.dateReservationEnd.split('T')[1].split(':')[0],
          priceTotal: response.priceTotal,
          dateYYMMDD: response.dateReservationStart.split('T')[0],
          statusReservation: response.statusReservation,
          isBooked: true
        };
        window.localStorage.setItem('dataReservation', JSON.stringify(dataToContext));
        setDataReservation(dataToContext);
      }
    });
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
                        <ButtonTableReservations onClick={ () => handleUpdateReservation(data.id) }
                          disabled={ loadingUpdateButtonState === data.id }
                        >
                          { loadingUpdateButtonState === data.id &&
                            <SpinnerButtonLoading />
                          }
                          Modificar
                        </ButtonTableReservations>
                      </td>
                      <td>
                        <ButtonTableReservations onClick={ () => handleDeleteReservation(data.id) }>
                          Eliminar
                        </ButtonTableReservations>
                      </td>
                      <td>
                        <ButtonTableReservations onClick={ () => handleViewStatusReservation(data.id) }
                          disabled={ loadingSpecificButtonState === data.id }
                        >
                          { loadingSpecificButtonState === data.id &&
                            <SpinnerButtonLoading />
                          }
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
      <Suspense fallback={ <SpinnerButtonLoading /> }>
        <ModalDeleteReservationUser
          idReservation={ idReservation }
          listReservations={ listReservations }
          setListReservations={ setListReservations }
        />
      </Suspense>
    </section>
  );
};

export default MyReservations;