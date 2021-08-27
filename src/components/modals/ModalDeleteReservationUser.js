import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'bootstrap';

export const openModalDeleteReservationUser = () => {
  let myModal = new Modal(
    document.getElementById('modalDeleteReservation'), {
      keyboard: true,
      focus: true
    }
  );
  myModal.show();
};

const ModalDeleteReservationUser = ({ idReservation }) => {
  const handleDeleteReservation = () => {
    let myModal = Modal.getInstance( document.getElementById('modalDeleteReservation') );
    
    
  };

  return (
    <div className="modal fade" id="modalDeleteReservation"
      tabIndex="-1" aria-labelledby="modalDeleteReservationLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalDeleteReservationLabel">Eliminar reservación</h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <strong>¿Esta seguro que desea eliminar esta reservación?</strong>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
              data-bs-dismiss="modal">Salir</button>
            <button
              type="button"
              className="btn btn-danger"
              // data-bs-dismiss="modal"
              onClick={ handleDeleteReservation }
            >
              Eliminar reservación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalDeleteReservationUser.propTypes = {
  idReservation: PropTypes.oneOfType([
    PropTypes.string, PropTypes.oneOf([null])
  ])
};

export default ModalDeleteReservationUser;