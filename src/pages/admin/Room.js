import React from 'react';

import DataRoom from '../../components/views/admin/DataRoom';

const Room = () => {
  return (
    <section className="container-fluid">
      <h1 style={ {fontSize: '1.8rem'} } className="text-center mb-3">Datos del Salón de Eventos</h1>
      <form id="form-room-info">
        <div className="col-md-12 row">
          <div className="col-md-7">
            <DataRoom />
          </div>
          <div className="col-md-5">
            
          </div>
        </div>
      </form>
    </section>
  );
};

export default Room;