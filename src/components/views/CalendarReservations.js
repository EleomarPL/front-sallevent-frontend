import React, {useEffect, useState} from 'react';
import _calendar from 'calendar';

import {data} from '../../data/public/calendar';
import CardDay from '../cards/CardDay';
import useReservation from '../../hooks/useReservation';

import '../../styles/stylesCalendar.css';

const CalendarReservations = () => {
  const [listReservations, setListReservation] = useState({});
  const {getDateReservationWithStatus} = useReservation();
  const cal = new _calendar.Calendar(0);
  const currentDate = new Date();
  
  useEffect(() => {
    getDateReservationWithStatus().then(response => {
      if (response) {
        let newData = {};
        response.forEach(object => {
          let splitDate = object.dateReservation.toString().split('T');
          newData = {
            ...newData,
            [`${splitDate[0]}`]: object.statusReservation
          };
        });
        setListReservation(newData);
      }
    });
  }, []);

  const [daysNotAllowed, setDaysNotAllowed] = useState({
    daySelected: null,
    daysHold: [],
    daysReservated: []
  });
  const [date, setDate] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth()
  });

  const handleNextMonth = () => {
    if (date.month === 11)
      setDate({year: date.year + 1, month: 0});
    else
      setDate({...date, month: date.month + 1});
  };

  const handleBackMonth = () => {
    if (date.month === 0)
      setDate({year: date.year - 1, month: 11});
    else
      setDate({...date, month: date.month - 1});
  };

  const _key = date.year.toString() + date.month;
  return (
    <div className="w-100">
      <div className="calendar-header w-100">
        <div className="d-flex justify-content-center pb-2">
          <strong style={ {margin: 'auto', fontSize: '1.5rem'} }>Seleccione la fecha</strong>
        </div>
        <div style={ {display: 'flex', alignItems: 'center', borderBottom: '2px solid #777e7e'} }>
          <div className="calendar-actions">
            <div className="d-flex justify-content-between align-items-center flex-grow-1">
              <button
                type="button"
                className="btn btn-dark"
                onClick={ handleBackMonth }
              >
                &#12296;
              </button>
              <span className="calendar-header-title">{ data.months[date.month] + ' ' + date.year }</span>
              <button
                type="button"
                className="btn btn-dark"
                onClick={ handleNextMonth }
              >
                &#10217;
              </button>
            </div>
          </div>
        </div>
        <div className="container-calendar-name-days">
          <div className="calendar-name-days" style={ {marginTop: '1rem'} }>
            { data.days.map(day => <strong key={ day }>{ day }</strong>) }
          </div>
        </div>
        <div className="calendar-info-weeks">
          {
            data.typeStatus.map(week =>
              <div key={ week.name } className="calendar-info-week">
                <span className="calendar-week-type"
                  style={ {backgroundColor: week.color} }></span>
                <p style={ {margin: 'auto'} }>{ week.name }</p>
              </div>)
          }
        </div>
      </div>
      <div className="calendar-date w-100">
        {
          cal.monthDays(date.year, date.month).map((week, i) =>
            <div key={ i } className="calendar-week">
              {
                week.map(day => {
                  if (day > 0) {
                    return <CardDay
                      key={ _key + day }
                      day={ day }
                      listReservation={ listReservations }
                      date={ date }
                      daysNotAllowed={ daysNotAllowed }
                      setDaysNotAllowed={ setDaysNotAllowed }
                    />;
                  } else return null;
                })
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default CalendarReservations;