import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import ButtonUpdatedDataUser from '../../buttons/ButtonUpdatedDataUser';
import {configInputsSettings} from '../../../data/my/inputsSettings';
import Auth from '../../../contexts/Auth';
import useUser from '../../../hooks/useUser';
import {
  isObjectValuesNull, validateLength, isNumberValue, isValidateEmail
} from '../../../services/validations/generalValidations';

const ChangeDataUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useContext(Auth);
  const { editDataUser } = useUser();

  const handleChangeData = (evt) => {
    evt.preventDefault();

    let dataEditUser = {
      name: {
        name: 'Nombre',
        minLength: 2,
        maxLength: 45,
        value: evt.target[0].value
      },
      lastName: {
        name: 'Apellido paterno',
        minLength: 2,
        maxLength: 45,
        value: evt.target[1].value
      },
      motherLastName: {
        name: 'Apellido materno',
        minLength: 2,
        maxLength: 45,
        value: evt.target[2].value
      },
      email: {
        name: 'Correo electronico',
        minLength: 10,
        maxLength: 80,
        value: evt.target[3].value
      },
      phone: {
        name: 'Telefono',
        minLength: 9,
        maxLength: 14,
        value: evt.target[4].value
      },
      userName: {
        name: 'Usuario',
        minLength: 6,
        maxLength: 45,
        value: evt.target[5].value
      }
    };

    if ( !isObjectValuesNull(dataEditUser) && validateLength(dataEditUser) ) {
      if ( isNumberValue({name: 'Telefono', value: dataEditUser['phone'].value}) &&
        isValidateEmail(dataEditUser['email'].value)) {
        setIsLoading(true);
        editDataUser({
          name: dataEditUser.name.value,
          lastName: dataEditUser.lastName.value,
          motherLastName: dataEditUser.motherLastName.value,
          email: dataEditUser.email.value,
          phone: dataEditUser.phone.value,
          userName: dataEditUser.userName.value
        }).then(() => {
          setIsLoading(false);
        });
      }
    }
  };

  return (
    <div style={ {background: 'white'} }>
      <form id="form-updated-data-user" onSubmit={ handleChangeData }>
        <div className="d-flex align-items-center flex-wrap p-3 w-100 bd-highlight" >
          <div className="d-flex flex-column flex-grow-1 bd-highlight">
            { configInputsSettings &&
              configInputsSettings.map(data =>
                <div
                  key={ data.name }
                  className="input-group w-100"
                >
                  <label
                    htmlFor={ data.name }
                    className="py-2 w-100"
                  >
                    { data.name }
                  </label>
                  <InputWithState
                    id={ data.name }
                    type={ data.type }
                    value={ userData[data.contextReference] }
                  />
                </div>
              )
            }
          </div>
          <div className="flex-shrink-1 bd-highlight m-auto">
            <picture>
              <source
                srcSet={ require('../../../img/my/settings/settings.webp') }
              />
              <img
                src={ require('../../../img/my/settings/settings.png') }
                alt="settings"
              />
            </picture>
          </div>
        </div>
      </form>
      <div className="py-3 d-flex justify-content-center">
        <ButtonUpdatedDataUser
          isLoading={ isLoading }
        />
      </div>
    </div>
  );
};

const InputWithState = ({value, type, id}) => {
  const [valueInput, setValue] = useState(value);
  return (
    <input
      id={ id }
      type={ type }
      className="form-control w-100"
      style={ {background: '#eeeeee'} }
      value={ valueInput }
      onChange={ (evt) => setValue(evt.target.value) }
      required
    />
  );
};
InputWithState.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ChangeDataUser;