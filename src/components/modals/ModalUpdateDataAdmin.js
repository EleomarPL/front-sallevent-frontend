import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'bootstrap';

import SpinnerButtonLoading from '../common/SpinnerButtonLoading';
import BaseButtonAdmin from '../buttons/BaseButtonAdmin';

import Auth from '../../contexts/Auth';

export const openmodalUpdateAdminUser = () => {
  let myModal = new Modal(
    document.getElementById('modalUpdateAdmin'), {
      keyboard: true,
      focus: true
    }
  );
  myModal.show();
};

const ModalUpdateDataAdmin = () => {
  const {userData} = useContext(Auth);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="modal fade" id="modalUpdateAdmin"
      tabIndex="-1" aria-labelledby="modalUpdateAdminLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-normal" id="modalUpdateAdminLabel">
              Modificar Información de <span className="fw-bold">{ userData.name }</span>
            </h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <div className="input-group mb-3">
              <span className="input-group-text" id="username">
                <i className="bi bi-person-circle" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <InputGroupWithState
                type="text"
                ariaDescribedBy="username"
                ariaLabel="Username"
                placeholder="Usuario"
                value={ userData.userName }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-person-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <div className="form-control px-0">
                <InputGroupWithState
                  type="text"
                  ariaDescribedBy=""
                  ariaLabel="Name"
                  placeholder="Nombre"
                  value={ userData.name }
                  isInGroup={ true }
                />
                <InputGroupWithState
                  type="text"
                  ariaDescribedBy=""
                  ariaLabel="LastName"
                  placeholder="Apellido paterno"
                  value={ userData.lastName }
                  isInGroup={ true }
                />
                <InputGroupWithState
                  type="text"
                  ariaDescribedBy=""
                  ariaLabel="MotherLastName"
                  placeholder="Apellido materno"
                  value={ userData.motherLastName }
                  isInGroup={ true }
                />
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="email">
                <i className="bi bi-envelope-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <InputGroupWithState
                type="email"
                ariaDescribedBy="email"
                ariaLabel="Email"
                placeholder="Email"
                value={ userData.email }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="phone">
                <i className="bi bi-telephone-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <InputGroupWithState
                type="tel"
                ariaDescribedBy="phone"
                ariaLabel="Phone"
                placeholder="Telefono"
                value={ userData.phone }
              />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <BaseButtonAdmin
                onClick={ () => console.log('actualizar') }
              >
                { isLoading &&
                  <SpinnerButtonLoading />
                }
                Actualizar
              </BaseButtonAdmin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputGroupWithState = ({value, ariaDescribedBy, ariaLabel, placeholder, type, isInGroup = false}) => {
  const [valueInput, setValue] = useState(value);
  return (
    <input
      type={ type } className={ `form-control ${isInGroup && 'mb-2'}` }
      style={ {borderRadius: `${isInGroup && 0}`} }
      placeholder={ placeholder } aria-label={ ariaLabel }
      aria-describedby={ ariaDescribedBy }
      value={ valueInput }
      onChange={ (evt) => setValue(evt.target.value) }
      required
    />
  );
};
InputGroupWithState.propTypes = {
  value: PropTypes.string.isRequired,
  ariaDescribedBy: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isInGroup: PropTypes.bool
};

export default ModalUpdateDataAdmin;