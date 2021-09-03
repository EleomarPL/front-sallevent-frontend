import React, {useState} from 'react';

import TableServices from '../../components/views/admin/TableServices';
import PersonalizedSearcher from '../../components/views/PersonalizedSearcher';

const Services = () => {
  const [searcher, setSearcher] = useState('');
  const [services, setServices] = useState([]);

  const handleChangeKeyword = (evt) => {
    setSearcher(evt.target.value);
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
        />
      </div>
    </section>
  );
};

export default Services;