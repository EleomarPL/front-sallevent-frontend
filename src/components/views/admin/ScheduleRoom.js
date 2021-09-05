import React from 'react';

const ScheduleRoom = () => {
  return (
    <section className="container-fluid py-3 px-2"
      style={ {boxShadow: '0 0 7px 1px #3e9fce', borderRadius: '10px'} }
    >
      <p className="text-center mb-3" style={ {fontSize: '1.3rem'} }>Días de laboración</p>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="monday" checked
        />
        <label className="form-check-label" htmlFor="monday">
          Lunes
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="tuesday" checked
        />
        <label className="form-check-label" htmlFor="tuesday">
          Martes
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="wednesday" checked
        />
        <label className="form-check-label" htmlFor="wednesday">
          Miércoles
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="thursday" checked
        />
        <label className="form-check-label" htmlFor="thursday">
          Jueves
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="friday" checked
        />
        <label className="form-check-label" htmlFor="friday">
          Viernes
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="saturday" checked
        />
        <label className="form-check-label" htmlFor="saturday">
          Sabado
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="sunday" checked
        />
        <label className="form-check-label" htmlFor="sunday">
          Domingo
        </label>
      </div>

    </section>
  );
};

export default ScheduleRoom;