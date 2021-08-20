import React, { useContext } from 'react';

import Quotation from '../../../contexts/Quotation';
import {notifyWarning} from '../../../consts/notifications';
import useService from '../../../hooks/useService';

const ButtonQuotation = () => {
  
  const {quotationData, setQuotationData} = useContext(Quotation);
  const {quotationReservation} = useService();

  const repairTime = (time) => {
    switch (time) {
    case 12: case 24:
      return time - 12;
    default:
      return time;
    }
  };

  const calculateCost = ({listServices, timeStart, timeEnd}) => {
    quotationReservation({listServices, timeStart, timeEnd}).then(response => {
      setQuotationData({
        ...quotationData,
        total: response !== null ? response.total : 0
      });
      console.log(response);
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
    if (dataToSend.length > 0) {
      calculateCost({listServices: dataToSend, timeStart, timeEnd});
    }
  };

  const handleQuotation = () => {
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
    <button type="button" className="btn btn-dark btn-sm"
      onClick={ handleQuotation }
    >
      Cotizar
    </button>
  );
};

export default ButtonQuotation;