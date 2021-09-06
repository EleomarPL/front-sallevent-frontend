import React from 'react';
import PropTypes from 'prop-types';

const ScheduleRoom = ({dataRoom = {}, setDataRoom}) => {

  const handleChangeChecks = ({evt, property}) => {
    setDataRoom({
      ...dataRoom,
      schedule: {
        ...dataRoom.schedule,
        [property]: evt.target.checked ? 'Y' : 'N'
      }
    });
  };
  return (
    <section className="container-fluid py-3 px-2"
      style={ {boxShadow: '0 0 7px 1px #3e9fce', borderRadius: '10px'} }
    >
      <p className="text-center mb-3" style={ {fontSize: '1.3rem'} }>Días de laboración</p>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="monday"
          defaultChecked={ dataRoom.schedule && dataRoom.schedule.monday === 'Y' }
          onClick={ (evt) => handleChangeChecks({evt, property: 'monday'}) }
        />
        <label className="form-check-label" htmlFor="monday">
          Lunes
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="tuesday"
          defaultChecked={ dataRoom.schedule && dataRoom.schedule.tuesday === 'Y' }
          onClick={ (evt) => handleChangeChecks({evt, property: 'tuesday'}) }
        />
        <label className="form-check-label" htmlFor="tuesday">
          Martes
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="wednesday"
          defaultChecked={ dataRoom.schedule && dataRoom.schedule.wednesday === 'Y' }
          onClick={ (evt) => handleChangeChecks({evt, property: 'wednesday'}) }
        />
        <label className="form-check-label" htmlFor="wednesday">
          Miércoles
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="thursday"
          defaultChecked={ dataRoom.schedule && dataRoom.schedule.thursday === 'Y' }
          onClick={ (evt) => handleChangeChecks({evt, property: 'thursday'}) }
        />
        <label className="form-check-label" htmlFor="thursday">
          Jueves
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="friday"
          defaultChecked={ dataRoom.schedule && dataRoom.schedule.friday === 'Y' }
          onClick={ (evt) => handleChangeChecks({evt, property: 'friday'}) }
        />
        <label className="form-check-label" htmlFor="friday">
          Viernes
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="saturday"
          defaultChecked={ dataRoom.schedule && dataRoom.schedule.saturday === 'Y' }
          onClick={ (evt) => handleChangeChecks({evt, property: 'saturday'}) }
        />
        <label className="form-check-label" htmlFor="saturday">
          Sabado
        </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox"
          id="sunday"
          defaultChecked={ dataRoom.schedule && dataRoom.schedule.sunday === 'Y' }
          onClick={ (evt) => handleChangeChecks({evt, property: 'sunday'}) }
        />
        <label className="form-check-label" htmlFor="sunday">
          Domingo
        </label>
      </div>

    </section>
  );
};

ScheduleRoom.propTypes = {
  dataRoom: PropTypes.oneOfType([
    PropTypes.object, PropTypes.oneOf([null])
  ]),
  setDataRoom: PropTypes.func.isRequired
};

export default ScheduleRoom;