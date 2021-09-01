import React from 'react';
import PropTypes from 'prop-types';

const TableGetUsers = ({ keyword }) => {
  return (
    <div className="table-responsive mt-3"
      style={ {maxWidth: '95vw', boxShadow: '0 0 7px 1px #3e9fce'} }
    >
      <table className="table table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Apellido P</th>
            <th>Apellido M</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Usuario</td>
            <td>Nombre</td>
            <td>Apellido P</td>
            <td>Apellido M</td>
            <td>Email</td>
            <td>Telefono</td>
            <td><ButtonModifyUser /></td>
            <td><ButtonDeleteUser /></td>
          </tr>
          <tr>
            <td>Usuario</td>
            <td>Nombre</td>
            <td>Apellido P</td>
            <td>Apellido M</td>
            <td>Email</td>
            <td>Telefono</td>
            <td><ButtonModifyUser /></td>
            <td><ButtonDeleteUser /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ButtonDeleteUser = () => {
  return (
    <button
      type="button"
      className="btn btn-danger"
    >
      Eliminar
    </button>
  );
};
const ButtonModifyUser = () => {
  return (
    <button
      type="button"
      className="btn btn-success"
    >
      Modificar
    </button>
  );
};


TableGetUsers.propTypes = {
  keyword: PropTypes.string.isRequired
};

export default TableGetUsers;