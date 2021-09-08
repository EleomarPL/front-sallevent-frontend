import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'bootstrap';

import useContact from '../../hooks/useContact';
import SpinnerButtonLoading from '../common/SpinnerButtonLoading';

export const openmodalDeleteContact = () => {
  let myModal = new Modal(
    document.getElementById('modalDeleteContact'), {
      keyboard: true,
      focus: true
    }
  );
  myModal.show();
};

const ModalDeleteContact = ({ idMessageContact, contact, setContact }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {deleteMessageContact} = useContact();
  
  const handleDelelteContact = () => {
    let myModal = Modal.getInstance( document.getElementById('modalDeleteContact') );
    setIsLoading(true);
    deleteMessageContact({idMessageContact}).then(response => {
      setIsLoading(false);
      if (response !== null) {
        setContact(contact.filter(data => data.id !== idMessageContact));
      }
      myModal.hide();
    });
  };

  return (
    <div className="modal fade" id="modalDeleteContact"
      tabIndex="-1" aria-labelledby="modalDeleteContactLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalDeleteContactLabel">Eliminar Mensaje de Contacto</h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <strong>¿Esta seguro que desea eliminar este mensaje de contact?</strong>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
              data-bs-dismiss="modal">Salir</button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={ handleDelelteContact }
              disabled={ isLoading }
            >
              { isLoading &&
                <SpinnerButtonLoading />
              }
              Eliminar mensaje de contacto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalDeleteContact.propTypes = {
  idMessageContact: PropTypes.oneOfType([
    PropTypes.string, PropTypes.oneOf([null])
  ]),
  contact: PropTypes.any.isRequired,
  setContact: PropTypes.func.isRequired
};

export default ModalDeleteContact;