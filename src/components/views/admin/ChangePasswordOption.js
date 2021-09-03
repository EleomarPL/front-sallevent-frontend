import React, { useState } from 'react';

const ChangePasswordOption = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-3">
      <div className="form-check d-flex justify-content-center">
        <input className="form-check-input" type="checkbox"
          value={ showPassword } id="showChangePassword"
          style={ {marginRight: '0.5rem'} }
          onClick={ () => setShowPassword(!showPassword) }
        />
        <label className="form-check-label" htmlFor="showChangePassword">
          Cambiar contraseña
        </label>
      </div>
      { showPassword &&
        <div className="input-group mb-3">
          <span className="input-group-text" id="password">
            <i className="bi bi-lock-fill" style={ {fontSize: '1.2rem'} }></i>
          </span>
          <input
            type="password" className="form-control"
            placeholder="Contraseña" aria-label="Password"
            aria-describedby="password"
            required
          />
        </div>
      }
    </div>
  );
};

export default ChangePasswordOption;