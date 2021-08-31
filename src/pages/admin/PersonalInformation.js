import React, {Suspense, useContext} from 'react';

import {inputsPersonalInformation} from '../../data/admin/inputsPersonalInformation';

import Auth from '../../contexts/Auth';
import BaseButtonAdmin from '../../components/buttons/BaseButtonAdmin';
import {openmodalUpdateAdminUser} from '../../components/modals/ModalUpdateDataAdmin';
import {openmodalUpdatePasswordAdminUser} from '../../components/modals/ModalUpdatePasswordAdmin';
import SpinnerLoading from '../../components/common/SpinnerLoading';

const ModalUpdateDataAdmin = React.lazy(() => import('../../components/modals/ModalUpdateDataAdmin'));
const ModalUpdatePasswordAdmin = React.lazy(() => import('../../components/modals/ModalUpdatePasswordAdmin'));

const PersonalInformation = () => {
  const {userData} = useContext(Auth);

  return (
    <section className="container-fluid">
      <h1 className="text-center mb-3" style={ {fontSize: '2rem'} }>Administrador</h1>
      <div className="border border-info p-2 mb-2"
        style={ {borderRadius: '10px', boxShadow: '0 0 7px 1px #3e9fce'} }
      >
        <div className="input-group mb-2">
          <label
            className="w-100 mb-2 fw-bold"
            htmlFor="fullname"
          >
            Nombre completo
          </label>
          <input
            type="text"
            className="form-control w-100"
            style={ {background: '#eeeeee'} }
            value={ `${userData.name} ${userData.lastName} ${userData.motherLastName}` }
            disabled
          />
        </div>
        { inputsPersonalInformation &&
          inputsPersonalInformation.map(objectData =>
            <div
              key={ objectData.name }
              className="input-group mb-2"
            >
              <label
                className="w-100 mb-2 fw-bold"
                htmlFor={ objectData.name }
              >
                { objectData.name }
              </label>
              <input
                type={ objectData.type }
                className="form-control w-100"
                style={ {background: '#eeeeee'} }
                value={ userData[objectData.contextReference] }
                disabled
              />
            </div>
          )
        }
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-3">
        <BaseButtonAdmin onClick={ openmodalUpdateAdminUser }>
          Modificar Información
        </BaseButtonAdmin>
        <div style={ {marginLeft: '1rem'} }>
          <BaseButtonAdmin onClick={ openmodalUpdatePasswordAdminUser }>
            Modificar Contraseña
          </BaseButtonAdmin>
        </div>
      </div>
      <Suspense fallback={ <SpinnerLoading /> }>
        <ModalUpdateDataAdmin />
      </Suspense>
      <Suspense fallback={ <SpinnerLoading /> }>
        <ModalUpdatePasswordAdmin />
      </Suspense>
    </section>
  );
};

export default PersonalInformation;