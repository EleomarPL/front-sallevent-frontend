import { useContext } from 'react';
import Quotation from '../../../contexts/Quotation';

const BoxTotal = () => {
  const { quotationData } = useContext(Quotation);

  return (
    <div className="input-group align-items-center mt-md-3 mt-1 mb-md-3 mb-1">
      <label
        htmlFor="total"
        className="mr-2"
        style={ {marginRight: '5px'} }
      >
        Total:
      </label>
      <input
        id="total"
        className="form-control"
        disabled
        type="text"
        value={ quotationData.total }
      />
    </div>
  );
};

export default BoxTotal;