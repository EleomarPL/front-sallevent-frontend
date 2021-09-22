import { useEffect, useState } from 'react';

import CardMessageCalendar from '../../components/cards/CardMessageCalendar';
import CalendarReservations from '../../components/views/CalendarReservations';
import {data} from '../../data/public/calendar';
import ButtonBookDay from '../../components/buttons/ButtonBookDate';

const Calendar = () => {
  const [instructionMessage, setInstructionMessage] = useState('Click sobre la fecha para reservar');
  const [dateSelected, setDateSelected] = useState(null);

  useEffect(() => {
    if (dateSelected)
      setInstructionMessage('Presione el boton \'Reservar este dia\'');
  }, [dateSelected]);
  return (
    <section className="col-md-12">
      <CardMessageCalendar message={ instructionMessage } />
      <div className="d-flex flex-wrap">
        <div className="col-md-7 px-0">
          <CalendarReservations showStage={ false } fcGetDaySelected={ setDateSelected } />
        </div>
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
          <div className="mb-md-4">
            {
              data.typeStatus.map(week =>
                <div key={ week.name } className="calendar-info-week">
                  <span className="calendar-week-type"
                    style={ {backgroundColor: week.color} }></span>
                  <p style={ {margin: 'auto'} }>{ week.name }</p>
                </div>)
            }
          </div>
          { dateSelected &&
            <ButtonBookDay date={ dateSelected } />
          }
        </div>
      </div>
    </section>
  );
};

export default Calendar;