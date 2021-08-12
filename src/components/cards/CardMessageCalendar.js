import React from 'react';

const CardMessageCalendar = () => {
  return (
    <div className="alert alert-info alert-dismissible fade show mb-2" role="alert">
      <span className="d-flex justify-content-center">
        Para fin de otorgar el mejor servicio, usted puede reservar el salón 2 días después de hoy.
      </span>
      <button type="button" className="btn-close"
        data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default CardMessageCalendar;