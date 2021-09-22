import PropTypes from 'prop-types';

import {QuotationProvider} from '../../contexts/Quotation';
import ServicesQuotation from '../views/quotationDashboard/ServicesQuotation';

const StructureQuotation = ({children, className}) => {
  return (
    <QuotationProvider>
      <div className={ className ? className : 'w-100' }>
        <ServicesQuotation />
      </div>
      { children }
    </QuotationProvider>
  );
};

StructureQuotation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default StructureQuotation;