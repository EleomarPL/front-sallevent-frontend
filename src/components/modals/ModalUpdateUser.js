import React, { useState } from 'react';
import { Modal } from 'bootstrap';
import PropTypes from 'prop-types';

import FormUpdateData from '../views/FormUpdateData';

import {isObjectValuesNull, validateLength, isNumberValue, isValidateEmail} from '../../services/validations/generalValidations';
import ChangePasswordOption from '../views/admin/ChangePasswordOption';

export const openmodalUpdateUserByAdminUser = () => {
  let myModal = new Modal(
    document.getElementById('modalUpdateUserByAdmin'), {
      keyboard: true,
      focus: true
    }
  );
  myModal.show();
};

const ModalUpdateUser = ({ userData = {}, users, setUsers }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitUpdateDataUser = (evt) => {
    evt.preventDefault();
    let myModal = Modal.getInstance( document.getElementById('modalUpdateUserByAdmin') );
    
    let changePasswordToo = evt.target[6].value === 'true';
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
    if (changePasswordToo) {
      dataEditUser = {
        ...dataEditUser,
        password: {
          name: 'Contraseña',
          minLength: 6,
          maxLength: 45,
          value: evt.target[7].value
        }
      };
    }

    if ( !isObjectValuesNull(dataEditUser) && validateLength(dataEditUser) ) {
      if ( isNumberValue({name: 'Telefono', value: dataEditUser['phone'].value}) &&
        isValidateEmail(dataEditUser['email'].value)) {
        setIsLoading(true);

      }
    }
  };

  return (
    <div className="modal fade" id="modalUpdateUserByAdmin"
      tabIndex="-1" aria-labelledby="modalUpdateUserByAdminLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-normal" id="modalUpdateUserByAdminLabel">
              Modificar Usuario
            </h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <FormUpdateData
              handleSubmitUpdateDataUser={ handleSubmitUpdateDataUser }
              isLoading={ isLoading }
              textButton="Actualizar Usuario"
              userData={ userData }
            >
              <ChangePasswordOption />
            </FormUpdateData>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalUpdateUser.propTypes = {
  userData: PropTypes.object,
  users: PropTypes.oneOfType([
    PropTypes.array, PropTypes.oneOf([null])
  ]),
  setUsers: PropTypes.func.isRequired
};

export default ModalUpdateUser;