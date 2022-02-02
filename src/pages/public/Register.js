import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {isObjectValuesNull, validateLength, isNumberValue, isValidateEmail}
  from '../../services/validations/generalValidations';
import useUser from '../../hooks/useUser';
import { notifyWarning } from '../../consts/notifications';

import '../../styles/stylesRegister.css';
import SpinnerButtonLoading from '../../components/common/SpinnerButtonLoading';

const Register = () => {
  const { createNewUser } = useUser();
  const navigate = useNavigate();

  const [messageStatusPassword, setMessageStatusPaswword] = useState({ color: '', text: '' });
  const [isLoading, setIsLoading] = useState();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [motherLastName, setMotherLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangeState = (evt, setNewValue) => setNewValue(evt.target.value);

  const verifyPasswordChange = (evt, setNewValue) => {
    setNewValue(evt.target.value);

    if (password !== evt.target.value )
      setMessageStatusPaswword({
        color: '#D70B00',
        text: 'Las contraseñas no coinciden'
      });
    else
      setMessageStatusPaswword({
        color: '#347d39',
        text: 'Las contraseñas coinciden'
      });
  };
  const handleSubmitRegister = (evt) => {
    evt.preventDefault();
    if (confirmPassword.trim() === password.trim()) {
      let dataNewUser = {
        name: {
          name: 'Nombre',
          minLength: 2,
          maxLength: 45,
          value: name
        },
        lastName: {
          name: 'Apellido paterno',
          minLength: 2,
          maxLength: 45,
          value: lastName
        },
        motherLastName: {
          name: 'Apellido materno',
          minLength: 2,
          maxLength: 45,
          value: motherLastName
        },
        phone: {
          name: 'Telefono',
          minLength: 9,
          maxLength: 14,
          value: phone
        },
        email: {
          name: 'Correo electronico',
          minLength: 10,
          maxLength: 80,
          value: email
        },
        userName: {
          name: 'Usuario',
          minLength: 6,
          maxLength: 45,
          value: userName
        },
        password: {
          name: 'Contraseña',
          minLength: 6,
          maxLength: 45,
          value: password
        }
      };

      if ( !isObjectValuesNull(dataNewUser) && validateLength(dataNewUser) ) {
        if ( isNumberValue({name: 'Telefono', value: dataNewUser['phone'].value}) &&
          isValidateEmail(dataNewUser['email'].value)) {

          setIsLoading(true);
          createNewUser({
            name, lastName, motherLastName, phone, email, userName, password
          }).then( (response) => {
            setIsLoading(false);
            if (response)
              navigate('/login');
          }).catch(() => {
            setIsLoading(false);
          });
        }
      }
    } else {
      notifyWarning('Las contraseñas no coinciden');
    }
  };

  return (
    <section className="container-fluid container-register py-lg-2">
      <div className="card no-gutters flex-md-row mx-lg-4">
        <article className="col-md-4 img-background">
          <h2 className="text-white text-center">Unete a nuestra comunidad</h2>
        </article>
        <article className="col-md-8">
          <div className="card-body">
            <form onSubmit={ handleSubmitRegister }>
              <h1 className="mb-3 font-weight-normal text-center pt-4 mt-4">Registrarme</h1>
              <div className="pt-4">
                <label htmlFor="name" className="visually-hidden-focusable">Nombre</label>
                <input type="text"
                  id="name" className="form-control mt-2"
                  placeholder="Nombre" value={ name }
                  onChange={ (evt) => handleChangeState(evt, setName) }
                  required autoFocus
                />
              </div>
              <div className="w-100 d-flex flex-wrap">
                <div className="mt-4 px-0 col-lg-6 pr-lg-1">
                  <label htmlFor="pa_lastname" className="visually-hidden-focusable">Apellido paterno</label>
                  <input type="text" value={ lastName }
                    id="pa_lastname" className="form-control"
                    onChange={ (evt) => handleChangeState(evt, setLastName) }
                    placeholder="Apellido paterno" required
                  />
                </div>
                <div className="mt-4 px-0 col-lg-6 pl-lg-1">
                  <label htmlFor="mo_lastname" className="visually-hidden-focusable">Apellido materno</label>
                  <input type="text" value={ motherLastName }
                    id="mo_lastname" className="form-control"
                    onChange={ (evt) => handleChangeState(evt, setMotherLastName) }
                    placeholder="Apellido materno" required
                  />
                </div>
              </div>
              <div className="w-100 d-flex flex-wrap">
                <div className="mt-4 px-0 col-lg-6 pr-lg-1">
                  <label htmlFor="email" className="visually-hidden-focusable">Email</label>
                  <input type="email" value={ email }
                    id="email" className="form-control"
                    onChange={ (evt) => handleChangeState(evt, setEmail) }
                    placeholder="Email" required
                  />
                </div>
                <div className="mt-4 px-0 col-lg-6 pl-lg-1">
                  <label htmlFor="phone" className="visually-hidden-focusable">Teléfono</label>
                  <input type="tel" value={ phone }
                    id="phone" className="form-control"
                    onChange={ (evt) => handleChangeState(evt, setPhone) }
                    placeholder="Teléfono" required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="user" className="visually-hidden-focusable">Usuario</label>
                <input type="text" value={ userName }
                  id="user" className="form-control"
                  onChange={ (evt) => handleChangeState(evt, setUserName) }
                  placeholder="Usuario" required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="visually-hidden-focusable">Contraseña</label>
                <div className="d-flex flex-column flex-sm-row">
                  <input id="password" value={ password }
                    type="password" className="form-control mr-sm-1 mr-md-2"
                    onChange={ (evt) => handleChangeState(evt, setPassword) }
                    placeholder="Contraseña" required
                  />
                </div>
              </div>
              <div id="box-confirmpass" className="mt-4">
                <label htmlFor="confirmpassword" className="visually-hidden-focusable">Confirmar constraseña</label>
                <div className="d-flex flex-column flex-sm-row">
                  <input type="password" id="confirmpassword"
                    value={ confirmPassword }
                    className="form-control mr-sm-1 mr-md-2" placeholder="Confirmar contraseña"
                    onChange={ (evt) => verifyPasswordChange(evt, setConfirmPassword) }
                    required
                  />
                </div>
              </div>
              <small style={ {fontWeight: '600', color: messageStatusPassword.color} }>
                { messageStatusPassword.text }
              </small>
              <div className="w-100 mt-4">
                <button type="submit" className="btn btn-lg btn-primary d-block px-4 mx-auto"
                  disabled={ isLoading }
                >
                  { isLoading &&
                    <SpinnerButtonLoading />
                  }
                  Registrarme
                </button>
              </div>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Register;