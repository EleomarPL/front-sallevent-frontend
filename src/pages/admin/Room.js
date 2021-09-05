import React from 'react';

import DataRoom from '../../components/views/admin/DataRoom';
import ScheduleRoom from '../../components/views/admin/ScheduleRoom';

const Room = () => {
  return (
    <section className="container-fluid">
      <h1 style={ {fontSize: '1.8rem'} } className="text-center mb-3">Datos del Salón de Eventos</h1>
      <form id="form-room-info">
        <div className="col-md-12 row">
          <div className="col-md-7 mb-3">
            <DataRoom />
          </div>
          <div className="col-md-5 mb-3">
            <ScheduleRoom />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Room;