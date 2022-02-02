import { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';

const CardDay = memo(function CardDay({day, date, daysNotAllowed, setDaysNotAllowed, listReservation, fcGetDaySelected}) {
  const currentDate = new Date();
  const [colorDay, setColorDay] = useState('#EEEEEE');

  let monthWitZero = ('0' + (date.month + 1)).slice(-2);
  let dayWithZero = ('0' + day).slice(-2);

  let validateDayReservated = listReservation[`${date.year}-${monthWitZero}-${dayWithZero}`];

  useEffect(() => {
    if (daysNotAllowed.daySelected !== null) {
      let dateSelected = {
        year: daysNotAllowed.daySelected.year,
        month: daysNotAllowed.daySelected.month,
        day: daysNotAllowed.daySelected.day
      };
      if (date.year === dateSelected.year && date.month === dateSelected.month &&
        day === dateSelected.day) {
        setColorDay('var(--day-selected)');
      } else {
        if (validateDayReservated === undefined)
          setColorDay('#EEEEEE');
      }
    }
  }, [daysNotAllowed.daySelected]);
  useEffect(() => {
    if (validateDayReservated !== undefined)
      setColorDay(validateDayReservated === 1 ? 'var(--day-reservated)' : 'var(--day-waiter)');
  }, [listReservation]);

  const isValidDay = () => {
    if (validateDayReservated !== undefined) {
      return false;
    }
    if ( date.year >= currentDate.getFullYear()) {
      if (date.month === currentDate.getMonth()) {
        if ( day >= currentDate.getDate() + 3) {
          return true;
        }
      } else if (date.month > currentDate.getMonth()) {
        return true;
      }
    }
    return false;
  };

  const handleClickUser = () => {
    if (isValidDay()) {
      if ( fcGetDaySelected )
        fcGetDaySelected(`${date.year}-${date.month + 1}-${day}`);
      setDaysNotAllowed({
        ...daysNotAllowed,
        daySelected: {
          year: date.year,
          month: date.month,
          day
        }
      });
    }
  };

  const handleStatusDay = () => {
    if (isValidDay()) {
      return 'pointer';
    }
    return 'not-allowed';
  };

  return (
    <div
      className="calendar-day"
      onClick={ handleClickUser }
      style={ {cursor: handleStatusDay()} }
    >
      <div className="d-flex flex-column rounded p-1 p-lg-2"
        style={ {color: '#1B1C1C', backgroundColor: colorDay} }
      >
        <span>{ day }</span>
      </div>
    </div>
  );
});
CardDay.propTypes = {
  day: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]).isRequired,
  date: PropTypes.object.isRequired,
  daysNotAllowed: PropTypes.object.isRequired,
  setDaysNotAllowed: PropTypes.func.isRequired,
  listReservation: PropTypes.oneOfType([
    PropTypes.string, PropTypes.object, PropTypes.oneOf([null])
  ]),
  fcGetDaySelected: PropTypes.func
};

export default CardDay;