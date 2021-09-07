import React from 'react';
import PropTypes from 'prop-types';

const ButtonTableReservations = ({ children, onClick, disabled = false }) => {
  return (
    <button
      className="btn btn-dark"
      type="button"
      onClick={ onClick }
      disabled={ disabled }
    >
      { children }
    </button>
  );
};

ButtonTableReservations.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default ButtonTableReservations;