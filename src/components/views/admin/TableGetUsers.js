import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useAdmin from '../../../hooks/useAdmin';
import SpinnerLoading from '../../common/SpinnerLoading';

const TableGetUsers = ({ keyword, users, setUsers }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {getUsers} = useAdmin();

  useEffect(() => {
    setIsLoading(true);
    getUsers({keyword}).then(response => {
      setIsLoading(false);
      if (response !== null)
        setUsers(response);
    });
  }, [keyword]);

  return (
    <div className="table-responsive mt-3"
      style={ {boxShadow: '0 0 7px 1px #3e9fce'} }
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
          { users !== null &&
            users.map(dataUser =>
              <tr
                key={ dataUser.id }
              >
                <td>{ dataUser.userName }</td>
                <td>{ dataUser.name }</td>
                <td>{ dataUser.lastName }</td>
                <td>{ dataUser.motherLastName }</td>
                <td>{ dataUser.email }</td>
                <td>{ dataUser.phone }</td>
                <td><ButtonModifyUser /></td>
                <td><ButtonDeleteUser /></td>
              </tr>
            )
          }
        </tbody>
      </table>
      { isLoading &&
        <SpinnerLoading />
      }
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
  keyword: PropTypes.string.isRequired,
  users: PropTypes.oneOfType([
    PropTypes.array, PropTypes.oneOf([null])
  ]),
  setUsers: PropTypes.func.isRequired
};

export default TableGetUsers;