import { useState, Suspense, lazy } from 'react';

import TableServices from '../../components/views/admin/TableServices';
import PersonalizedSearcher from '../../components/views/PersonalizedSearcher';
import {openmodalCreateUpdateServicesUser} from '../../components/modals/ModalCreateUpdateServices';
import SpinnerLoading from '../../components/common/SpinnerLoading';

const ModalCreateUpdateServices = lazy(() => import('../../components/modals/ModalCreateUpdateServices'));

const Services = () => {
  const [searcher, setSearcher] = useState('');
  const [services, setServices] = useState([]);
  const [dataService, setDataService] = useState(null);

  const handleChangeKeyword = (evt) => {
    setSearcher(evt.target.value);
  };
  const handleCreateService = () => {
    setDataService(null);
    openmodalCreateUpdateServicesUser();
  };

  return (
    <section className="container-fluid">
      <h1 style={ {fontSize: '1.8rem'} } className="text-center">Servicios</h1>
      <PersonalizedSearcher
        title="Tabla Servicios"
        value={ searcher }
        setValue={ handleChangeKeyword }
        placeholder="Nombre servicio"
      />
      <div className="mx-100">
        <TableServices
          keyword={ searcher }
          services={ services }
          setServices={ setServices }
          setDataService={ setDataService }
        />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={ handleCreateService }
        >
          Crear nuevo servicio
        </button>
      </div>
      <Suspense fallback={ <SpinnerLoading /> }>
        <ModalCreateUpdateServices
          services={ services }
          setServices={ setServices }
          dataService={ dataService }
        />
      </Suspense>
    </section>
  );
};

export default Services;