import React from 'react';
import PropTypes from 'prop-types';

const CardMessageCalendar = ({ message }) => {
  return (
    <div className="alert alert-info alert-dismissible fade show mb-2" role="alert">
      <strong className="d-flex justify-content-center">
        Para fin de otorgar el mejor servicio, usted puede reservar el salón 2 días después de hoy.
      </strong>
      <span className="d-flex justify-content-center">
        { message }
      </span>
      <button type="button" className="btn-close"
        data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

CardMessageCalendar.propTypes = {
  message: PropTypes.string
};

export default CardMessageCalendar;