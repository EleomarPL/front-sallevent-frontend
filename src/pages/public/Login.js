import React from 'react';

import '../../styles/stylesRegister.css';

const Login = () => {

  const handleSubmitLogin = (evt) => {
    evt.preventDefault();

  };

  return (
    <section className="container-fluid container-register py-lg-4">
      <div className="container px-lg-4">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-4 img-background">
              <h2 className="text-white text-center">Accede a nuestra comunidad</h2>
            </div>
            <div className="col-md-8" style={ {minHeight: '80vh'} }>
              <div className="card-body">
                <form onSubmit={ handleSubmitLogin }>
                  <h1 className="mb-3 font-weight-normal pt-4 mt-4">Acceder</h1>
                  <div className="pt-4">
                    <label htmlFor="user" className="visually-hidden-focusable">Usuario</label>
                    <input type="text" id="user"
                      className="form-control form-control mt-2"
                      placeholder="Usuario" required
                      autoFocus
                    />
                  </div>
                  <div className="pt-2 pb-4">
                    <label htmlFor="inputPassword" className="visually-hidden-focusable">Password</label>
                    <input type="password" id="inputPassword"
                      className="form-control form-control mt-4"
                      placeholder="Contraseña" required
                    />
                  </div>
                  <button type="submit" className="btn btn-lg btn-primary btn-block-4 my-4 px-4">
                    Acceder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;