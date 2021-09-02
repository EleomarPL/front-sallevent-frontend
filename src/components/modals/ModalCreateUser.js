import React, { useState } from 'react';
import { Modal } from 'bootstrap';

import FormUpdateData from '../views/FormUpdateData';
import useUser from '../../hooks/useUser';

import {isObjectValuesNull, validateLength, isNumberValue, isValidateEmail} from '../../services/validations/generalValidations';

export const openmodalCreateUserUser = () => {
  let myModal = new Modal(
    document.getElementById('modalCreateUser'), {
      keyboard: true,
      focus: true
    }
  );
  myModal.show();
};

const ModalCreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {createNewUser} = useUser();

  const handleSubmitUpdateDataUser = (evt) => {
    evt.preventDefault();
    let myModal = Modal.getInstance( document.getElementById('modalCreateUser') );

    let dataNewUser = {
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
      },
      password: {
        name: 'Contraseña',
        minLength: 6,
        maxLength: 45,
        value: evt.target[6].value
      }
    };

    if ( !isObjectValuesNull(dataNewUser) && validateLength(dataNewUser) ) {
      if ( isNumberValue({name: 'Telefono', value: dataNewUser['phone'].value}) &&
        isValidateEmail(dataNewUser['email'].value)) {
        setIsLoading(true);
        createNewUser({
          name: dataNewUser.name.value, lastName: dataNewUser.lastName.value,
          motherLastName: dataNewUser.motherLastName.value, email: dataNewUser.email.value,
          phone: dataNewUser.phone.value, userName: dataNewUser.userName.value,
          password: dataNewUser.password.value
        }).then(response => {
          setIsLoading(false);
          if (response) {
            for (var i = 0 ; i < 7 ; i++ ) {
              evt.target[i].value = '';
            }
            myModal.hide();
          }
        });
      }
    }
  };

  return (
    <div className="modal fade" id="modalCreateUser"
      tabIndex="-1" aria-labelledby="modalCreateUserLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-normal" id="modalCreateUserLabel">
              Crear Usuario
            </h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <FormUpdateData
              handleSubmitUpdateDataUser={ handleSubmitUpdateDataUser }
              isLoading={ isLoading }
              textButton="Crear Usuario"
            >
              <div className="input-group mb-3">
                <span className="input-group-text" id="password">
                  <i className="bi bi-lock-fill" style={ {fontSize: '1.2rem'} }></i>
                </span>
                <input
                  type="password" className="form-control"
                  placeholder="Contraseña" aria-label="Password"
                  aria-describedby="password"
                  required
                />
              </div>
            </FormUpdateData>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateUser;