import React, {useState} from 'react';
import PersonalizedSearcher from '../../components/views/PersonalizedSearcher';

const Services = () => {
  const [searcher, setSearcher] = useState('');

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
    </section>
  );
};

export default Services;