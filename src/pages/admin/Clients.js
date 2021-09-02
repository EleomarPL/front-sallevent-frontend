import React, { Suspense, useState } from 'react';

import BaseButtonAdmin from '../../components/buttons/BaseButtonAdmin';
import TableGetUsers from '../../components/views/admin/TableGetUsers';
import PersonalizedSearcher from '../../components/views/PersonalizedSearcher';
import {openmodalCreateUserUser} from '../../components/modals/ModalCreateUser';
import SpinnerLoading from '../../components/common/SpinnerLoading';

const ModalCreateUser = React.lazy(() => import('../../components/modals/ModalCreateUser'));

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
      <PersonalizedSearcher
        title="Table de clientes"
        value={ searcher }
        setValue={ handleChangeKeyword }
      />
      <div className="mx-100">
        <TableGetUsers keyword={ searcher } />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <BaseButtonAdmin onClick={ openmodalCreateUserUser }>
          Crear nuevo usuario
        </BaseButtonAdmin>
      </div>
      <Suspense fallback={ <SpinnerLoading /> }>
        <ModalCreateUser />
      </Suspense>
    </section>
  );
};

export default Clients;