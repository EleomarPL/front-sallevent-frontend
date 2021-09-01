import React, { useState } from 'react';

import BaseButtonAdmin from '../../components/buttons/BaseButtonAdmin';
import TableGetUsers from '../../components/views/admin/TableGetUsers';
import { DebounceInput } from 'react-debounce-input';

const Clients = () => {
  const [searcher, setSearcher] = useState('');

  const handleChangeKeyword = (evt) => {
    setSearcher(evt.target.value);
  };
  const getCurrentDate = () => {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    let day = ('0' + currentDate.getDate()).slice(-2);

    return `${day}/${month}/${year}`;
  };
  return (
    <section className="container-fluid">
      <strong className="d-flex justify-content-end" style={ {fontSize: '1.2rem'} }>{ getCurrentDate() }</strong>
      <div className="d-flex flex-wrap justify-content-around">
        <div className="fw-bold" style={ {fontSize: '1.5rem'} }>Table de clientes</div>
        <div className="input-group w-50">
          <span className="input-group-text" id="search"><i className="bi bi-search"></i></span>
          <DebounceInput
            minLength={ 2 }
            type="text"
            aria-label="Buscar"
            aria-describedby="search"
            className="form-control"
            debounceTimeout={ 300 }
            onChange={ handleChangeKeyword }
            value={ searcher }
            placeholder="Nombre de usuario - min 2 palabras"
          />
        </div>
      </div>
      <div className="mx-100">
        <TableGetUsers keyword={ searcher } />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <BaseButtonAdmin onClick={ () => console.log('crear usuario') }>
          Crear nuevo usuario
        </BaseButtonAdmin>
      </div>
    </section>
  );
};

export default Clients;