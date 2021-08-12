import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const CardDay = ({day, date, daysNotAllowed, setDaysNotAllowed}) => {
  const currentDate = new Date();
  const [colorDay, setColorDay] = useState('#EEEEEE');

  useEffect(() => {
    if (daysNotAllowed.daySelected !== null) {
      let dateSelected = {
        year: daysNotAllowed.daySelected.year,
        month: daysNotAllowed.daySelected.month,
        day: daysNotAllowed.daySelected.day
      };
      if (date.year === dateSelected.year && date.month === dateSelected.month &&
        day === dateSelected.day) {
        setColorDay('purple');
      } else {
        setColorDay('#EEEEEE');
      }
    }
  }, [daysNotAllowed.daySelected]);

  const isValidDay = () => {
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
};
CardDay.propTypes = {
  day: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]).isRequired,
  date: PropTypes.object.isRequired,
  daysNotAllowed: PropTypes.object.isRequired,
  setDaysNotAllowed: PropTypes.func.isRequired
};

export default CardDay;