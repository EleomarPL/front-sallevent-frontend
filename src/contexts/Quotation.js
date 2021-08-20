import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Quotation = React.createContext({});

export const QuotationProvider = ({ children }) => {
  const [quotationData, setQuotationData] = useState({
    typeEvent: '',
    starttime: {
      time: '',
      timetable: 'am'
    },
    finaltime: {
      time: '',
      timetable: 'am'
    },
    listServices: '',
    total: 0
  });
  return (
    <Quotation.Provider value={ { quotationData, setQuotationData } }>
      { children }
    </Quotation.Provider>
  );
};

QuotationProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Quotation;
