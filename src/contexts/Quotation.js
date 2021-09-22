import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const Quotation = createContext({});

export const QuotationProvider = ({ children }) => {
  const [quotationData, setQuotationData] = useState(
    JSON.parse(window.localStorage.getItem('dataQuotationAlternative')) ||
    {
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
