import React, {useState} from 'react';
import { Modal } from 'bootstrap';

import BaseButtonAdmin from '../buttons/BaseButtonAdmin';
import SpinnerButtonLoading from '../common/SpinnerButtonLoading';

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
  const [isLoading, setIsLoading] = useState(false);

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
                type="text" className="form-control"
                placeholder="Contraseña Actual" aria-label="CurrentPassword"
                aria-describedby="username"
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="newpassword">
                <i className="bi bi-lock" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <input
                type="text" className="form-control"
                placeholder="Nueva Contraseña" aria-label="NewPassword"
                aria-describedby="newpassword"
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="confirmpassword">
                <i className="bi bi-lock-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <input
                type="text" className="form-control"
                placeholder="Confirmar Contraseña" aria-label="ConfirmPassword"
                aria-describedby="confirmpassword"
                required
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

export default ModalUpdatePasswordAdmin;