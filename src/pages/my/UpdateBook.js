import React, {useEffect} from 'react';

import StructureQuotation from '../../components/layouts/StructureQuotation';
import DataUser from '../../components/views/user/DataUser';
import ButtonClean from '../../components/views/quotationDashboard/ButtonClean';
import ButtonQuotation from '../../components/views/quotationDashboard/ButtonQuotation';
import BoxTotal from '../../components/views/quotationDashboard/BoxTotal';
import ButtonBackBook from '../../components/buttons/ButtonBackBook';
import ButtonUpdateBook from '../../components/buttons/ButtonUpdateBook';

const UpdateBook = () => {
  useEffect(() => {
    return () => {
      window.localStorage.removeItem('dataQuotationAlternative');
    };
  }, []);
  return (
    <section className="container-fluid">
      <h1 className="col-lg-12 pb-md-2">Modificar Reserva:</h1>
      <div className="d-flex flex-wrap justify-content-around">
        <StructureQuotation className="col-lg-6 border border-dark p-2 mb-2">
          <div className="col-md-5 border border-dark p-2 mb-2">
            <h2 className="col-md-12 text-center mb-4">Datos del cliente</h2>
            <DataUser />
          </div>
          <div className="w-100 d-flex flex-wrap justify-content-around align-items-center">
            <div className="d-flex flex-wrap align-items-center mb-3">
              <div style={ {marginRight: '0.8rem'} }>
                <ButtonUpdateBook />
              </div>
              <div style={ {marginRight: '0.8rem'} }>
                <ButtonQuotation />
              </div>
              <ButtonClean />
            </div>
            <div className="d-flex flex-wrap align-items-center mb-3">
              <div style={ {marginRight: '0.5rem'} }>
                <ButtonBackBook to="/my/my-reservations" text="Regresar" />
              </div>
              <div style={ {width: '15rem'} }>
                <BoxTotal />
              </div>
            </div>
          </div>
        </StructureQuotation>
      </div>
    </section>
  );
};

export default UpdateBook;