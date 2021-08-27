import React, { useContext, useState } from 'react';

import {notifyWarning} from '../../consts/notifications';
import Quotation from '../../contexts/Quotation';
import ReservationUser from '../../contexts/ReservationUser';
import SpinnerButtonLoading from '../common/SpinnerButtonLoading';
import useReservation from '../../hooks/useReservation';

const ButtonBook = () => {
  const {quotationData} = useContext(Quotation);
  const {dataReservation, setDataReservation} = useContext(ReservationUser);
  const {createReservation} = useReservation();

  const [isLoading, setIsLoading] = useState(false);

  const repairTime = (time) => {
    switch (time) {
    case 12: case 24:
      return time - 12;
    default:
      return time;
    }
  };

  const bookDay = ({listServices, timeStart, timeEnd, typeEvent}) => {
    setIsLoading(true);

    createReservation({
      listSelectedServices: listServices, timeStart, timeEnd, typeEvent, dateYYMMDD: dataReservation.dateYYMMDD
    }).then(response => {
      if (response !== null) {
        setIsLoading(false);
        let newDataReservation = {
          ...dataReservation,
          typeEvent: response.typeEvent,
          timeStart,
          timeEnd,
          statusReservation: response.statusReservation,
          priceTotal: response.priceTotal,
          isBooked: true
        };
        window.localStorage.setItem('dataReservation', JSON.stringify(newDataReservation));
        setDataReservation(newDataReservation);
      }
    });
    
  };
  const validaServices = ({ timeStart, timeEnd }) => {
    let dataToSend = [];
    if (quotationData.listServices.length > 0) {
      quotationData.listServices.forEach((element) => {
        if (quotationData[element.id]) {
          if (Number(quotationData[element.id]))
            dataToSend.push({
              amountService: Number(quotationData[element.id]),
              id: element.id
            });
          else if (isNaN(quotationData[element.id]))
            notifyWarning('Valores invalidos en la cantidad de un servicio');
        }
      });
    }
    bookDay({listServices: dataToSend, timeStart, timeEnd, typeEvent: quotationData.typeEvent});
  };

  const handleBook = () => {
    let timeStart = quotationData.starttime.time;
    let timeEnd = quotationData.finaltime.time;
    if (quotationData.typeEvent.trim() === '' || timeStart === '' ||
      timeEnd === ''
    ) {
      notifyWarning('Rellene todos los campos');
    } else if (isNaN(timeStart) || isNaN(timeEnd)) {
      notifyWarning('Tiempos con formatos no validos');
    } else if (Number(timeStart) < 1 || Number(timeStart) > 12 || (Number(timeEnd) < 1 || Number(timeEnd) > 12)) {
      notifyWarning('Una hora puede abarcar de 1 a 12 am/pm');
    } else {
      let newTimeFormatStartTime =
        quotationData.starttime.timetable === 'am' ? Number(timeStart) : Number(timeStart) + 12;
      let newTimeFormatEndTime =
        quotationData.finaltime.timetable === 'am' ? Number(timeEnd) : Number(timeEnd) + 12;

      newTimeFormatStartTime = repairTime(newTimeFormatStartTime);
      newTimeFormatEndTime = repairTime(newTimeFormatEndTime);

      if (newTimeFormatStartTime >= newTimeFormatEndTime)
        notifyWarning('La hora de inicio debe ser menor a la hora final');
      else
        validaServices({timeStart: newTimeFormatStartTime, timeEnd: newTimeFormatEndTime});
    }
  };

  return (
    <div className="d-flex align-items-center">
      <i className="bi bi-cart-plus-fill" style={ {fontSize: '1.6rem', marginRight: '0.3rem'} }></i>
      <button
        type="button"
        className="btn btn-dark btn-sm"
        onClick={ handleBook }
      >
        { isLoading &&
          <SpinnerButtonLoading />
        }
        Reservar día
      </button>
    </div>
  );
};

export default ButtonBook;