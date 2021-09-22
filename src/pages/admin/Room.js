import { useEffect, useState } from 'react';

import {isObjectValuesNull, validateLength, isNumberValue} from '../../services/validations/generalValidations';
import {notifyWarning} from '../../consts/notifications';
import BaseButtonAdmin from '../../components/buttons/BaseButtonAdmin';
import DataRoom from '../../components/views/admin/DataRoom';
import DirectionRoom from '../../components/views/admin/DirectionRoom';
import ScheduleRoom from '../../components/views/admin/ScheduleRoom';
import useRoom from '../../hooks/useRoom';
import SpinnerButtonLoading from '../../components/common/SpinnerButtonLoading';

const Room = () => {
  const [infoRoom, setInfoRoom] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {getInfoRoom, updateInfoRoom} = useRoom();
  useEffect(() => {
    getInfoRoom().then(response => {
      if (response !== null)
        setInfoRoom(response);
    });
  }, []);

  const handleSubmitNewData = (evt) => {
    evt.preventDefault();
    let dataRoom = {
      name: {
        name: 'Nombre',
        minLength: 2,
        maxLength: 45,
        value: infoRoom.room.name
      },
      description: {
        name: 'Detalles',
        minLength: 2,
        maxLength: 300,
        value: infoRoom.room.description
      },
      street: {
        name: 'Calle',
        minLength: 2,
        maxLength: 45,
        value: infoRoom.direction.street
      },
      state: {
        name: 'Estado',
        minLength: 2,
        maxLength: 45,
        value: infoRoom.direction.state
      },
      municipality: {
        name: 'Municipio',
        minLength: 2,
        maxLength: 45,
        value: infoRoom.direction.municipality
      },
      suburb: {
        name: 'Colonia',
        minLength: 2,
        maxLength: 45,
        value: infoRoom.direction.suburb.toString()
      }
    };
    
    if ( !isObjectValuesNull(dataRoom) && validateLength(dataRoom) ) {
      if ( isNumberValue({name: 'Capacidad', value: infoRoom.room.capacity})
      ) {
        if (isNaN(infoRoom.room.priceHour)) {
          notifyWarning('Precio debe ser numerico');
        } else {
          if (Number(infoRoom.room.capacity) <= 0 || Number(infoRoom.room.priceHour) <= 0) {
            notifyWarning('Un valor númerico debe ser mayor a 0');
          } else {
            setIsLoading(true);
            updateInfoRoom({
              name: dataRoom.name.value, capacity: infoRoom.room.capacity, description: dataRoom.description.value,
              priceHour: infoRoom.room.priceHour, street: dataRoom.street.value, state: dataRoom.state.value,
              municipality: dataRoom.municipality.value, suburb: dataRoom.suburb.value,
              sunday: infoRoom.schedule.sunday, monday: infoRoom.schedule.monday,
              tuesday: infoRoom.schedule.tuesday, wednesday: infoRoom.schedule.wednesday,
              thursday: infoRoom.schedule.thursday, friday: infoRoom.schedule.friday,
              saturday: infoRoom.schedule.saturday
            }).then(response => {
              setIsLoading(false);
              if (response !== null)
                setInfoRoom(response);
            });
          }
        }
      }
    }
  };

  return (
    <section className="container-fluid">
      <h1 style={ {fontSize: '1.8rem'} } className="text-center mb-3">Datos del Salón de Eventos</h1>
      <form id="form-room-info">
        <div className="col-md-12 row">
          <div className="col-md-7 mb-3">
            <DataRoom dataRoom={ infoRoom } setDataRoom={ setInfoRoom } />
          </div>
          <div className="col-md-5 mb-3">
            <ScheduleRoom dataRoom={ infoRoom } setDataRoom={ setInfoRoom } />
          </div>
          <div className="col-md-7 mb-3">
            <DirectionRoom dataRoom={ infoRoom } setDataRoom={ setInfoRoom } />
          </div>
        </div>
        <div className="d-flex justify-content-center my-2">
          <BaseButtonAdmin type={ 1 } onClick={ handleSubmitNewData }
            disabled={ isLoading }
          >
            { isLoading &&
              <SpinnerButtonLoading />
            }
            Actualizar
          </BaseButtonAdmin>
        </div>
      </form>
    </section>
  );
};

export default Room;