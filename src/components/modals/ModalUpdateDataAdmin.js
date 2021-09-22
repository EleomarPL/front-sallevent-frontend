import { useContext, useState } from 'react';
import { Modal } from 'bootstrap';

import Auth from '../../contexts/Auth';
import useAdmin from '../../hooks/useAdmin';
import FormUpdateData from '../views/FormUpdateData';

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
            <FormUpdateData
              handleSubmitUpdateDataUser={ handleSubmitUpdateDataUser }
              isLoading={ isLoading }
              userData={ userData }
              textButton="Actualizar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default ModalUpdateDataAdmin;