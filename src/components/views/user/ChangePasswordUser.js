import {useState} from 'react';

import {passwordsInputsSettings} from '../../../data/my/inputsSettings';
import ButtonUpdatedPasswordUser from '../../buttons/ButtonUpdatedPasswordUser';
import useUser from '../../../hooks/useUser';
import {isObjectValuesNull, validateLength} from '../../../services/validations/generalValidations';
import {notifyInfo} from '../../../consts/notifications';

const ChangePasswordUser = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatusPassword, setMessageStatusPaswword] = useState({ color: '', text: '' });
  const {editPasswordUser} = useUser();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const changeValueInput = (evt, setNewValue) => setNewValue(evt.target.value);
  
  const verifyNewPassword = (evt, setNewValue, index) => {
    setNewValue(evt.target.value);
    if (index === 1 || confirmNewPassword.trim() !== '') {
      let stringToCompare = index === 0 ? confirmNewPassword : newPassword;
      if (stringToCompare !== evt.target.value )
        setMessageStatusPaswword({
          color: '#D70B00',
          text: 'Las contraseñas no coinciden'
        });
      else
        setMessageStatusPaswword({
          color: '#347d39',
          text: 'Las contraseñas coinciden'
        });
    }
  };

  const handleChangePassword = (evt) => {
    evt.preventDefault();
    if (newPassword.trim() === confirmNewPassword.trim()) {
      let dataNewUser = {
        name: {
          name: 'Contraseña Actual',
          minLength: 6,
          maxLength: 45,
          value: oldPassword
        },
        lastName: {
          name: 'Nueva Contraseña',
          minLength: 6,
          maxLength: 45,
          value: confirmNewPassword
        }
      };
      if ( !isObjectValuesNull(dataNewUser) && validateLength(dataNewUser) ) {
        setIsLoading(true);
        editPasswordUser({oldPassword, newPassword}).then(response => {
          if (response) {
            setOldPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
            setMessageStatusPaswword({ color: '', text: '' });
          }
          setIsLoading(false);
        });
      }
    } else {
      notifyInfo('Las contraseñas no coinciden');
    }
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
              value={ oldPassword }
              onChange={ (evt) => changeValueInput(evt, setOldPassword) }
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
            passwordsInputsSettings.map((data, index) =>
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
                  value={ index === 0 ? newPassword : confirmNewPassword }
                  onChange={ (evt) => verifyNewPassword(evt, index === 0 ? setNewPassword : setConfirmNewPassword, index) }
                  required
                />
              </div>
            )
          }
        </div>
        <div className="d-flex justify-content-center py-1">
          <small style={ {fontWeight: '600', color: messageStatusPassword.color} }>
            { messageStatusPassword.text }
          </small>
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