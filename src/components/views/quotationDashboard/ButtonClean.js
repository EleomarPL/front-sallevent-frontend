import { useContext } from 'react';

import Quotation from '../../../contexts/Quotation';

const ButtonClean = () => {
  
  const { quotationData, setQuotationData } = useContext(Quotation);

  const handleReset = () => {
    const {listServices} = quotationData;
    setQuotationData({
      listServices,
      typeEvent: '',
      starttime: {
        time: '',
        timetable: 'am'
      },
      finaltime: {
        time: '',
        timetable: 'am'
      },
      total: 0
    });
  };
  return (
    <button type="reset" className="btn btn-dark btn-sm"
      form="formQuotation" onClick={ handleReset }
    >
      Limpiar
    </button>
  );
};

export default ButtonClean;