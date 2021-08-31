import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'bootstrap';

import SpinnerButtonLoading from '../common/SpinnerButtonLoading';
import BaseButtonAdmin from '../buttons/BaseButtonAdmin';
import Auth from '../../contexts/Auth';
import useAdmin from '../../hooks/useAdmin';

import {isObjectValuesNull, validateLength, isNumberValue, isValidateEmail} from '../../services/validations/generalValidations';

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
  const {editDataAdmin} = useAdmin();

  const handleSubmitUpdateDataUser = (evt) => {
    evt.preventDefault();
    let myModal = Modal.getInstance( document.getElementById('modalUpdateAdmin') );

    let dataEditUser = {
      name: {
        name: 'Nombre',
        minLength: 2,
        maxLength: 45,
        value: evt.target[1].value
      },
      lastName: {
        name: 'Apellido paterno',
        minLength: 2,
        maxLength: 45,
        value: evt.target[2].value
      },
      motherLastName: {
        name: 'Apellido materno',
        minLength: 2,
        maxLength: 45,
        value: evt.target[3].value
      },
      email: {
        name: 'Correo electronico',
        minLength: 10,
        maxLength: 80,
        value: evt.target[4].value
      },
      phone: {
        name: 'Telefono',
        minLength: 9,
        maxLength: 14,
        value: evt.target[5].value
      },
      userName: {
        name: 'Usuario',
        minLength: 6,
        maxLength: 45,
        value: evt.target[0].value
      }
    };

    if ( !isObjectValuesNull(dataEditUser) && validateLength(dataEditUser) ) {
      if ( isNumberValue({name: 'Telefono', value: dataEditUser['phone'].value}) &&
        isValidateEmail(dataEditUser['email'].value)) {
        setIsLoading(true);
        editDataAdmin({
          name: dataEditUser.name.value, lastName: dataEditUser.lastName.value,
          email: dataEditUser.email.value, motherLastName: dataEditUser.motherLastName.value,
          phone: dataEditUser.phone.value, userName: dataEditUser.userName.value
        }).then(() => {
          setIsLoading(false);
          myModal.hide();
        });
      }
    }
  };

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
            <form onSubmit={ handleSubmitUpdateDataUser }>
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
                  type={ 1 }
                >
                  { isLoading &&
                    <SpinnerButtonLoading />
                  }
                  Actualizar
                </BaseButtonAdmin>
              </div>
            </form>
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