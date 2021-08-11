import React, { useState } from 'react';

import '../../styles/stylesRegister.css';

const Register = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [motherLastName, setMotherLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangeState = (evt, setNewValue) => setNewValue(evt.target.value);

  const handleSubmitRegister = (evt) => {
    evt.preventDefault();
    
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
                <label htmlFor="name" className="sr-only">Nombre</label>
                <input type="text"
                  id="name" className="form-control mt-2"
                  placeholder="Nombre" value={ name }
                  onChange={ (evt) => handleChangeState(evt, setName) }
                  required autoFocus
                />
              </div>
              <div className="w-100 d-flex flex-wrap">
                <div className="mt-4 px-0 col-lg-6 pr-lg-1">
                  <label htmlFor="pa_lastname" className="sr-only">Apellido paterno</label>
                  <input type="text" value={ lastName }
                    id="pa_lastname" className="form-control"
                    onChange={ (evt) => handleChangeState(evt, setLastName) }
                    placeholder="Apellido paterno" required
                  />
                </div>
                <div className="mt-4 px-0 col-lg-6 pl-lg-1">
                  <label htmlFor="mo_lastname" className="sr-only">Apellido materno</label>
                  <input type="text" value={ motherLastName }
                    id="mo_lastname" className="form-control"
                    onChange={ (evt) => handleChangeState(evt, setMotherLastName) }
                    placeholder="Apellido materno" required
                  />
                </div>
              </div>
              <div className="w-100 d-flex flex-wrap">
                <div className="mt-4 px-0 col-lg-6 pr-lg-1">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" value={ email }
                    id="email" className="form-control"
                    onChange={ (evt) => handleChangeState(evt, setEmail) }
                    placeholder="Email" required
                  />
                </div>
                <div className="mt-4 px-0 col-lg-6 pl-lg-1">
                  <label htmlFor="phone" className="sr-only">Teléfono</label>
                  <input type="tel" value={ phone }
                    id="phone" className="form-control"
                    onChange={ (evt) => handleChangeState(evt, setPhone) }
                    placeholder="Teléfono" required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="user" className="sr-only">Usuario</label>
                <input type="text" value={ userName }
                  id="user" className="form-control"
                  onChange={ (evt) => handleChangeState(evt, setUserName) }
                  placeholder="Usuario" required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="sr-only">Contraseña</label>
                <div className="d-flex flex-column flex-sm-row">
                  <input id="password" value={ password }
                    type="password" className="form-control mr-sm-1 mr-md-2"
                    onChange={ (evt) => handleChangeState(evt, setPassword) }
                    placeholder="Contraseña" required
                  />
                </div>
              </div>
              <div id="box-confirmpass" className="mt-4">
                <label htmlFor="confirmpassword" className="sr-only">Confirmar constraseña</label>
                <div className="d-flex flex-column flex-sm-row">
                  <input type="password" id="confirmpassword"
                    value={ confirmPassword }
                    className="form-control mr-sm-1 mr-md-2" placeholder="Confirmar contraseña"
                    onChange={ (evt) => handleChangeState(evt, setConfirmPassword) }
                    required
                  />
                </div>
              </div>
              <div className="w-100 mt-4">
                <button type="submit" className="btn btn-lg btn-primary d-block px-4 mx-auto">
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