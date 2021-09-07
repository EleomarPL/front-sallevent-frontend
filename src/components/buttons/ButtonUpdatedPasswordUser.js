import React from 'react';
import PropTypes from 'prop-types';

import SpinnerButtonLoading from '../common/SpinnerButtonLoading';

const ButtonUpdatedPasswordUser = ({isLoading}) => {
  return (
    <button type="submit" className="btn btn-dark btn-sm"
      form="form-updated-password-user" disabled={ isLoading }
    >
      { isLoading &&
        <SpinnerButtonLoading />
      }
      Actualizar Contraseña
    </button>
  );
};

ButtonUpdatedPasswordUser.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default ButtonUpdatedPasswordUser;