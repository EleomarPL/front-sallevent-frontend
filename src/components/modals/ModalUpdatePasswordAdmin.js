import {useState} from 'react';
import { Modal } from 'bootstrap';

import BaseButtonAdmin from '../buttons/BaseButtonAdmin';
import SpinnerButtonLoading from '../common/SpinnerButtonLoading';
import useAdmin from '../../hooks/useAdmin';

import {isObjectValuesNull, validateLength} from '../../services/validations/generalValidations';

export const openmodalUpdatePasswordAdminUser = () => {
  let myModal = new Modal(
    document.getElementById('modalUpdatePasswordAdmin'), {
      keyboard: true,
      focus: true
    }
  );
  myModal.show();
};

const ModalUpdatePasswordAdmin = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [messageStatusPassword, setMessageStatusPaswword] = useState({ color: '', text: '' });

  const [isLoading, setIsLoading] = useState(false);
  const {editPasswordAdmin} = useAdmin();

  const verifyNewPassword = (evt, setNewValue, index) => {
    setNewValue(evt.target.value);
    if (index === 1 || confirmPassword.trim() !== '') {
      let stringToCompare = index === 0 ? confirmPassword : newPassword;
      if (stringToCompare !== evt.target.value )
        setMessageStatusPaswword({
          color: '#D70B00',
          text: 'Las contraseñas no coinciden'
        });
      else
        setMessageStatusPaswword({
          color: '#347d39',
          text: 'Las contraseñas coinciden'
        });
    }
  };

  const updatePasswordAdmin = () => {
    if (newPassword.trim() === confirmPassword.trim()) {
      let myModal = Modal.getInstance( document.getElementById('modalUpdatePasswordAdmin') );
      let dataNewUser = {
        name: {
          name: 'Contraseña Actual',
          minLength: 6,
          maxLength: 45,
          value: oldPassword
        },
        lastName: {
          name: 'Nueva Contraseña',
          minLength: 6,
          maxLength: 45,
          value: confirmPassword
        }
      };
      if ( !isObjectValuesNull(dataNewUser) && validateLength(dataNewUser) ) {
        setIsLoading(true);
        editPasswordAdmin({oldPassword, newPassword}).then(response => {
          setIsLoading(false);
          if (response) {
            setConfirmPassword('');
            setNewPassword('');
            setOldPassword('');
            setMessageStatusPaswword({ color: '', text: '' });
            myModal.hide();
          }
        });
      }
    }
  };

  return (
    <div className="modal fade" id="modalUpdatePasswordAdmin"
      tabIndex="-1" aria-labelledby="modalUpdatePasswordAdminLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-normal" id="modalUpdatePasswordAdminLabel">
              Modificar Contraseña
            </h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <div className="input-group mb-3">
              <span className="input-group-text" id="username">
                <i className="bi bi-key-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <input
                type="password" className="form-control"
                placeholder="Contraseña Actual" aria-label="CurrentPassword"
                aria-describedby="username"
                value={ oldPassword }
                onChange={ (evt) => setOldPassword(evt.target.value) }
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="newpassword">
                <i className="bi bi-lock" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <input
                type="password" className="form-control"
                placeholder="Nueva Contraseña" aria-label="NewPassword"
                aria-describedby="newpassword"
                value={ newPassword }
                onChange={ (evt) => verifyNewPassword(evt, setNewPassword, 0) }
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="confirmpassword">
                <i className="bi bi-lock-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <input
                type="password" className="form-control"
                placeholder="Confirmar Contraseña" aria-label="ConfirmPassword"
                aria-describedby="confirmpassword"
                value={ confirmPassword }
                onChange={ (evt) => verifyNewPassword(evt, setConfirmPassword, 1) }
                required
              />
            </div>
            <small style={ {fontWeight: '600', color: messageStatusPassword.color} }>
              { messageStatusPassword.text }
            </small>
            <div className="d-flex flex-wrap justify-content-center">
              <BaseButtonAdmin
                onClick={ updatePasswordAdmin }
                disabled={ isLoading }
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

export default ModalUpdatePasswordAdmin;