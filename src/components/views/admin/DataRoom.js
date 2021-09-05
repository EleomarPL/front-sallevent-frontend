import React from 'react';
import PropTypes from 'prop-types';

const DataRoom = ({dataRoom = {}, setDataRoom}) => {
  const handleChangeInputs = ({evt, property}) => {
    setDataRoom({
      ...dataRoom,
      room: {
        ...dataRoom.room,
        [property]: evt.target.value
      }
    });
  };

  return (
    <section className="container-fluid py-3 px-2"
      style={ {boxShadow: '0 0 7px 1px #3e9fce', borderRadius: '10px'} }
    >
      <div></div>
      <table className="w-100">
        <tbody>
          <tr>
            <td>
              <span id="nameRoom" style={ {marginRight: '1rem'} }>Nombre del Salón: </span>
            </td>
            <td>
              <input type="text" className="form-control mb-3"
                placeholder="Nombre del salón" aria-label="Name"
                aria-describedby="nameRoom" value={ dataRoom.room ? dataRoom.room.name : '' }
                onChange={ (evt) => handleChangeInputs({evt, property: 'name'}) }
              />
            </td>
          </tr>
          <tr>
            <td>
              <span id="capacity" style={ {marginRight: '1rem'} }>Capacidad: </span>
            </td>
            <td>
              <input type="text" className="form-control mb-3"
                placeholder="Capacidad" aria-label="Capacity"
                aria-describedby="capacity" value={ dataRoom.room ? dataRoom.room.capacity : '' }
                onChange={ (evt) => handleChangeInputs({evt, property: 'capacity'}) }
              />
            </td>
          </tr>
          <tr>
            <td>
              <span id="price" style={ {marginRight: '1rem'} }>Precio por hora: </span>
            </td>
            <td>
              <input type="text" className="form-control mb-3"
                placeholder="Precio" aria-label="Price"
                aria-describedby="price" value={ dataRoom.room ? dataRoom.room.priceHour : '' }
                onChange={ (evt) => handleChangeInputs({evt, property: 'priceHour'}) }
              />
            </td>
          </tr>
          <tr>
            <td>
              <span>Descripción del salón</span>
            </td>
            <td>
              <textarea
                className="form-control mb-3"
                aria-label="Description"
                placeholder="Descripción"
                value={ dataRoom.room ? dataRoom.room.description : '' }
                onChange={ (evt) => handleChangeInputs({evt, property: 'description'}) }
              >
              </textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

DataRoom.propTypes = {
  dataRoom: PropTypes.oneOfType([
    PropTypes.object, PropTypes.oneOf([null])
  ]),
  setDataRoom: PropTypes.func.isRequired
};

export default DataRoom;