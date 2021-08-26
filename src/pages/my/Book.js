import React from 'react';

import StructureQuotation from '../../components/layouts/StructureQuotation';
import DataUser from '../../components/views/user/DataUser';
import ButtonClean from '../../components/views/quotationDashboard/ButtonClean';
import ButtonQuotation from '../../components/views/quotationDashboard/ButtonQuotation';
import BoxTotal from '../../components/views/quotationDashboard/BoxTotal';

const Book = () => {
  return (
    <section className="container-fluid">
      <h1 className="col-lg-12 pb-md-2">Reservar:</h1>
      <div className="d-flex flex-wrap justify-content-around">
        <StructureQuotation className="col-lg-6 border border-dark p-2 mb-2">
          <div className="col-md-5 border border-dark p-2 mb-2">
            <h2 className="col-md-12 text-center mb-4">Datos del cliente</h2>
            <DataUser />
          </div>
          <div className="w-100 d-flex justify-content-around align-items-center">
            <div className="d-flex flex-wrap">
              <div style={ {marginRight: '0.8rem'} }>
                <ButtonQuotation />
              </div>
              <ButtonClean />
            </div>
            <div>
              <BoxTotal />
            </div>
          </div>
        </StructureQuotation>
      </div>
    </section>
  );
};

export default Book;