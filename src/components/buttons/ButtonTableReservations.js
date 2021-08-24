import React from 'react';
import PropTypes from 'prop-types';

const ButtonTableReservations = ({ children, onClick }) => {
  return (
    <button
      className="btn btn-dark"
      type="button"
      onClick={ onClick }
    >
      { children }
    </button>
  );
};

ButtonTableReservations.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ButtonTableReservations;