import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useService from '../../../hooks/useService';
import Quotation from '../../../contexts/Quotation';

const ServicesQuotation = () => {
  const { quotationData, setQuotationData } = useContext(Quotation);
  const { getAllServices } = useService();
  const typeEventsArray = [
    'Graduacion',
    'Boda',
    'Bautizo',
    'Comunion',
    'Confirmacion',
    'Cumpleaños',
    'Quince años',
    'Reunion'
  ];

  useEffect(() => {
    getAllServices().then(response => {
      setQuotationData({
        ...quotationData,
        listServices: response
      });
    });
  }, []);
  useEffect(() => {
    setTypeEvent({
      selectValue: switchTypeEvent(quotationData.typeEvent),
      inputAltValue: switchTypeEvent(quotationData.typeEvent) === 'other' ? quotationData.typeEvent : ''
    });
  }, [quotationData.typeEvent]);

  const switchTypeEvent = (event) => {
    switch (event) {
    case typeEventsArray.includes(event):
      return event;
    case '':
      return '';
    default:
      return 'other';
    }
  };

  const [typeEvent, setTypeEvent] = useState({
    selectValue: switchTypeEvent(quotationData.typeEvent),
    inputAltValue: switchTypeEvent(quotationData.typeEvent) === 'other' ? quotationData.typeEvent : ''
  });

  const handleChageValueSelect = (evt) => {
    let newValue = evt.target.value;

    setTypeEvent({
      ...typeEvent,
      selectValue: newValue
    });
    setQuotationData({
      ...quotationData,
      typeEvent: newValue === 'other' ? '' : newValue
    });
  };

  const handleChangeInputSelect = (evt) => {
    setTypeEvent({
      ...typeEvent,
      inputAltValue: evt.target.value
    });
    setQuotationData({
      ...quotationData,
      typeEvent: evt.target.value
    });
  };

  const handleChangeSelectTime = ({evt, isStartTime}) => {
    if (isStartTime) {
      setQuotationData({
        ...quotationData,
        starttime: {
          ...quotationData.starttime,
          timetable: evt.target.value
        }
      });
    } else {
      setQuotationData({
        ...quotationData,
        finaltime: {
          ...quotationData.finaltime,
          timetable: evt.target.value
        }
      });
    }
  };

  const handleChangeInputTime = ({evt, isStartTime}) => {
    if (isStartTime) {
      setQuotationData({
        ...quotationData,
        starttime: {
          ...quotationData.starttime,
          time: evt.target.value
        }
      });
    } else {
      setQuotationData({
        ...quotationData,
        finaltime: {
          ...quotationData.finaltime,
          time: evt.target.value
        }
      });
    }
  };

  const handleChangeServices = ({evt, nameService}) => {
    setQuotationData({
      ...quotationData,
      [`${nameService}`]: evt.target.value
    });
  };
  return (
    <>
      <div className="pt-2 w-100">
        <form style={ {marginLeft: '1rem'} } id="formQuotation">
          <div className="col-md-12 input-group align-items-center mt-2 mb-4">
            <label htmlFor="event" style={ {marginRight: '5px'} }>Evento:</label>
            <select id="event" className="form-select"
              value={ typeEvent.selectValue } required
              onChange={ handleChageValueSelect }
              style={ {marginRight: '5px'} }
            >
              <option value="" hidden>Seleccione una opción</option>
              { typeEventsArray &&
                typeEventsArray.map(event =>
                  <option
                    key={ event }
                    value={ event }
                  >
                    { event }
                  </option>
                )
              }
              <option value="other">Otro</option>
            </select>
            { typeEvent.selectValue === 'other' &&
              <>
                <label
                  htmlFor="event"
                  className="mr-2"
                  style={ {marginRight: '5px'} }
                >
                  Mencionelo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={ typeEvent.inputAltValue }
                  required
                  onChange={ handleChangeInputSelect }
                />
              </>
            }
          </div>
          <div className="col-md-5 justify-content-center m-auto">
            <div className="input-group d-flex flex-wrap align-items-center mb-1">
              <label style={ {marginRight: '5px'} } htmlFor="start-time">Hr inicio:</label>
              <input type="number" placeholder="1"
                id="start-time" className="form-control"
                min="1" max="12"
                value={ quotationData.starttime.time }
                onChange={ evt => handleChangeInputTime({evt, isStartTime: true}) }
                required />
              <select
                className="form-select"
                value={ quotationData.starttime.timetable }
                onChange={ evt => handleChangeSelectTime({evt, isStartTime: true}) }
              >
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
            </div>
            <div className="input-group d-flex flex-wrap align-items-center mb-1">
              <label style={ {marginRight: '5px'} } htmlFor="final-time">Hr final:</label>
              <input type="number" placeholder="12"
                id="final-time" className="form-control"
                min="1" max="12"
                value={ quotationData.finaltime.time }
                onChange={ evt => handleChangeInputTime({evt, isStartTime: false}) }
                required />
              <select
                className="form-select"
                value={ quotationData.finaltime.timetable }
                onChange={ evt => handleChangeSelectTime({evt, isStartTime: false}) }
              >
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <h3>Servicios:</h3>
          </div>
          <div className="col-md-12 mt-2">
            <div className="d-flex justify-content-center flex-wrap">
              { quotationData.listServices &&
                  quotationData.listServices.map( object =>
                    <div
                      key={ object.id }
                      className="d-flex flex-wrap align-items-center mb-1"
                      style={ {marginRight: '5px'} }
                    >
                      <label style={ {marginRight: '5px'} } htmlFor={ object.id }>{ object.name }:</label>
                      <input type="number"
                        className="form-control"
                        id={ object.id }
                        style={ {width: '5rem'} }
                        min="1"
                        value={ quotationData[object.id] ? quotationData[object.id] : '' }
                        onChange={ evt => handleChangeServices({evt, nameService: `${object.id}`}) }
                        required />
                    </div>
                  )
              }
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

ServicesQuotation.propTypes = {
  children: PropTypes.node
};

export default ServicesQuotation;