import React from 'react';
import PropTypes from 'prop-types';

import {QuotationProvider} from '../../contexts/Quotation';
import ServicesQuotation from '../views/ServicesQuotation';

const StructureQuotation = ({children}) => {
  return (
    <QuotationProvider>
      <ServicesQuotation />
      { children }
    </QuotationProvider>
  );
};

StructureQuotation.propTypes = {
  children: PropTypes.node
};

export default StructureQuotation;