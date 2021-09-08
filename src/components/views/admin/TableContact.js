import React from 'react';
import PropTypes from 'prop-types';

const TableContact = ({ contact, setContact }) => {

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
                <td>{ dataContact.text.slice(0, 20) + `${dataContact.text.length >= 20 && '...'}` }</td>
                <td><ButtonReadMessage onClick={ () => console.log('read message') } /></td>
                <td><ButtonDeleteUser onClick={ () => console.log('delete message') } /></td>
              </tr>
            )
          }
        </tbody>
      </table>
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