import React from 'react';
import PropTypes from 'prop-types';

import SpinnerButtonLoading from '../common/SpinnerButtonLoading';

const ButtonUpdatedDataUser = ({isLoading}) => {
  return (
    <button type="submit" className="btn btn-dark btn-sm"
      form="form-updated-data-user"
    >
      { isLoading &&
        <SpinnerButtonLoading />
      }
      Actualizar Datos
    </button>
  );
};

ButtonUpdatedDataUser.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default ButtonUpdatedDataUser;