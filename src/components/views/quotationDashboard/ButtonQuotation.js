import React, { useContext } from 'react';

import Quotation from '../../../contexts/Quotation';

const ButtonQuotation = () => {
  
  const {quotationData, setQuotationData} = useContext(Quotation);

  const handleQuotation = () => {
    
  };
  return (
    <button type="reset" className="btn btn-dark btn-sm"
      form="formQuotation" onClick={ handleQuotation }
    >
      Cotizar
    </button>
  );
};

export default ButtonQuotation;