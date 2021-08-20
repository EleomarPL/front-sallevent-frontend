import React, { useContext } from 'react';

import Quotation from '../../../contexts/Quotation';
import {notifyWarning} from '../../../consts/notifications';

const ButtonQuotation = () => {
  
  const {quotationData, setQuotationData} = useContext(Quotation);

  const repairTime = (time) => {
    switch (time) {
    case 12: case 24:
      return time - 12;
    default:
      return time;
    }
  };

  const calculateCost = () => {

  };
  const validaServices = () => {
    let dataToSend = [];
    if (quotationData.listServices.length > 0) {
      quotationData.listServices.forEach((element) => {
        if (quotationData[element.id]) {
          if (Number(quotationData[element.id]))
            dataToSend.push({
              amountService: Number(quotationData[element.id]),
              id: element.id
            });
          else
            notifyWarning('Valores invalidos en la cantidad de un servicio');
        }
      });
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
        validaServices();
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