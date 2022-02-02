import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'bootstrap';

import useAdmin from '../../hooks/useAdmin';
import SpinnerButtonLoading from '../common/SpinnerButtonLoading';

export const openmodalDeleteUserUser = () => {
  let myModal = new Modal(
    document.getElementById('modalDeleteUser'), {
      keyboard: true,
      focus: true
    }
  );
  myModal.show();
};

const modalDeleteUserUser = ({ idUser, users, setUsers }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { deleteUser } = useAdmin();

  const handleDeleteReservation = () => {
    let myModal = Modal.getInstance( document.getElementById('modalDeleteUser') );
    setIsLoading(true);
    deleteUser({id: idUser}).then(response => {
      setIsLoading(false);
      if (response) {
        setUsers(users.filter(user => user.id !== idUser));
      }
      myModal.hide();
    });
    
  };

  return (
    <div className="modal fade" id="modalDeleteUser"
      tabIndex="-1" aria-labelledby="modalDeleteUserLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalDeleteUserLabel">Eliminar Usuario</h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <strong>¿Esta seguro que desea eliminar este usuario?</strong>
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
              Eliminar usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

modalDeleteUserUser.propTypes = {
  idUser: PropTypes.oneOfType([
    PropTypes.string, PropTypes.oneOf([null])
  ]),
  users: PropTypes.oneOfType([
    PropTypes.array, PropTypes.oneOf([null])
  ]),
  setUsers: PropTypes.func.isRequired
};

export default modalDeleteUserUser;