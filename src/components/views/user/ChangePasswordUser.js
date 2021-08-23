import React, {useState} from 'react';

import {passwordsInputsSettings} from '../../../data/my/inputsSettings';
import ButtonUpdatedPasswordUser from '../../buttons/ButtonUpdatedPasswordUser';

const ChangePasswordUser = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="mt-3 p-3 w-100" style={ {background: 'white'} }>
      <form id="form-updated-password-user" onSubmit={ handleChangePassword }>
        <div className="w-100 d-flex align-items-end">
          <div className="input-group w-50">
            <label
              htmlFor="currentPassword"
              className="py-2 w-100"
            >
              Escriba su contraseña actual
            </label>
            <input
              id="currentPassword"
              type={ isVisiblePassword ? 'text' : 'password' }
              className="form-control w-100"
              style={ {background: '#eeeeee'} }
              required
            />
          </div>
          <button
            type="button"
            className="mt-1 btn btn-link"
            style={ {textDecoration: 'none'} }
            onClick={ () => {
              setIsVisiblePassword(!isVisiblePassword);
            } }
          >
            { isVisiblePassword ? 'Ocultar' : 'Ver' }
          </button>
        </div>
        <div className="row">
          { passwordsInputsSettings &&
            passwordsInputsSettings.map((data) =>
              <div
                className="col-md-5 m-auto"
                key={ data.name }
              >
                <label
                  htmlFor={ data.name }
                  className="py-2 w-100"
                >
                  { data.name }
                </label>
                <input
                  id={ data.name }
                  type={ data.type }
                  className="form-control"
                  style={ {background: '#eeeeee'} }
                  required
                />
              </div>
            )
          }
        </div>
      </form>
      <div className="pt-3 d-flex justify-content-center">
        <ButtonUpdatedPasswordUser
          isLoading={ isLoading }
        />
      </div>
    </div>
  );
};

export default ChangePasswordUser;