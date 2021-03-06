import { Suspense, useState, lazy } from 'react';
import PropTypes from 'prop-types';

import { openmodalReadMessageContactUser } from '../../modals/ModalReadMessageContact';
import { openmodalDeleteContact } from '../../modals/ModalDeleteContact';
import SpinnerLoading from '../../common/SpinnerLoading';

const ModalReadMessageContact = lazy(() => import('../../modals/ModalReadMessageContact'));
const ModalDeleteContact = lazy(() => import('../../modals/ModalDeleteContact'));

const TableContact = ({ contact, setContact }) => {
  const [dataMessageContact, setDataMessageContact] = useState({});
  const [idMessageContact, setIdMessageContact] = useState('');

  const handleReadMessageContact = (dataMessage) => {
    setDataMessageContact(dataMessage);
    openmodalReadMessageContactUser();
  };
  const handleDeleteMessageContact = (id) => {
    setIdMessageContact(id);
    openmodalDeleteContact();
  };

  return (
    <div className="table-responsive mt-3"
      style={ {boxShadow: '0 0 7px 1px #3e9fce'} }
    >
      <table className="table table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Mensaje</th>
            <th>Ver</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          { contact &&
            contact.map(dataContact =>
              <tr
                key={ dataContact.id }
              >
                <td>{ dataContact.fullName }</td>
                <td>{ dataContact.text.slice(0, 20) + `${dataContact.text.length >= 20 ? '...' : ''}` }</td>
                <td><ButtonReadMessage onClick={ () => handleReadMessageContact(dataContact) } /></td>
                <td><ButtonDeleteUser onClick={ () => handleDeleteMessageContact(dataContact.id) } /></td>
              </tr>
            )
          }
        </tbody>
      </table>
      <Suspense fallback={ <SpinnerLoading /> }>
        <ModalReadMessageContact dataMessageContact={ dataMessageContact } />
        <ModalDeleteContact
          contact={ contact }
          setContact={ setContact }
          idMessageContact={ idMessageContact }
        />
      </Suspense>
    </div>
  );
};

const ButtonReadMessage = ({ onClick }) => {
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={ onClick }
    >
      Ver Completo
    </button>
  );
};
const ButtonDeleteUser = ({ onClick }) => {
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={ onClick }
    >
      Eliminar
    </button>
  );
};

ButtonDeleteUser.propTypes = {
  onClick: PropTypes.func.isRequired
};
ButtonReadMessage.propTypes = {
  onClick: PropTypes.func.isRequired
};

TableContact.propTypes = {
  contact: PropTypes.oneOfType([
    PropTypes.array, PropTypes.oneOf([null])
  ]),
  setContact: PropTypes.func.isRequired
};

export default TableContact;