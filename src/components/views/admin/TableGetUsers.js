import { Suspense, useEffect, useState, lazy } from 'react';
import PropTypes from 'prop-types';

import useAdmin from '../../../hooks/useAdmin';
import SpinnerLoading from '../../common/SpinnerLoading';
import { openmodalDeleteUserUser } from '../../modals/ModalDeleteUser';
import { openmodalUpdateUserByAdminUser } from '../../modals/ModalUpdateUser';

const ModalDeleteUser = lazy(() => import('../../modals/ModalDeleteUser'));
const ModalUpdateUser = lazy(() => import('../../modals/ModalUpdateUser'));

const TableGetUsers = ({ keyword, users, setUsers }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [idUser, setIdUser] = useState('');
  const [userData, setUserData] = useState({});
  const { getUsers } = useAdmin();

  useEffect(() => {
    setIsLoading(true);
    getUsers({keyword}).then(response => {
      setIsLoading(false);
      if (response !== null)
        setUsers(response);
    });
  }, [keyword]);

  const handleDeleteUser = (id) => {
    setIdUser(id);
    openmodalDeleteUserUser();
  };
  const handleUpdateUser = (dataUser) => {
    setUserData(dataUser);
    openmodalUpdateUserByAdminUser();
  };

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
                <td><ButtonModifyUser onClick={ () => handleUpdateUser(dataUser) } /></td>
                <td><ButtonDeleteUser onClick={ () => handleDeleteUser(dataUser.id) } /></td>
              </tr>
            )
          }
        </tbody>
      </table>
      { isLoading &&
        <SpinnerLoading />
      }
      <Suspense fallback={ <SpinnerLoading /> }>
        <ModalDeleteUser
          idUser={ idUser }
          users={ users }
          setUsers={ setUsers }
        />
        <ModalUpdateUser
          users={ users }
          setUsers={ setUsers }
          userData={ userData }
        />
      </Suspense>
    </div>
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
const ButtonModifyUser = ({ onClick }) => {
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={ onClick }
    >
      Modificar
    </button>
  );
};

ButtonDeleteUser.propTypes = {
  onClick: PropTypes.func.isRequired
};
ButtonModifyUser.propTypes = {
  onClick: PropTypes.func.isRequired
};
TableGetUsers.propTypes = {
  keyword: PropTypes.string.isRequired,
  users: PropTypes.oneOfType([
    PropTypes.array, PropTypes.oneOf([null])
  ]),
  setUsers: PropTypes.func.isRequired
};

export default TableGetUsers;