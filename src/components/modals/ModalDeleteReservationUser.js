import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'bootstrap';

import useReservation from '../../hooks/useReservation';
import SpinnerButtonLoading from '../common/SpinnerButtonLoading';

export const openModalDeleteReservationUser = () => {
  let myModal = new Modal(
    document.getElementById('modalDeleteReservation'), {
      keyboard: true,
      focus: true
    }
  );
  myModal.show();
};

const ModalDeleteReservationUser = ({ idReservation, listReservations, setListReservations }) => {
  const {deleteReservation} = useReservation();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteReservation = () => {
    let myModal = Modal.getInstance( document.getElementById('modalDeleteReservation') );
    setIsLoading(true);
    deleteReservation({idReservation}).then(response => {
      setIsLoading(false);
      if (response !== null) {
        setListReservations(listReservations.filter(data => data.id !== idReservation));
      }
      myModal.hide();
    });
    
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
              onClick={ handleDeleteReservation }
              disabled={ isLoading }
            >
              { isLoading &&
                <SpinnerButtonLoading />
              }
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
  ]),
  listReservations: PropTypes.any.isRequired,
  setListReservations: PropTypes.func.isRequired
};

export default ModalDeleteReservationUser;