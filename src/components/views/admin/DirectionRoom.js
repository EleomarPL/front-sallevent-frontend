import PropTypes from 'prop-types';

const DirectionRoom = ({dataRoom = {}, setDataRoom}) => {
  const handleChangeInputs = ({evt, property}) => {
    setDataRoom({
      ...dataRoom,
      direction: {
        ...dataRoom.direction,
        [property]: evt.target.value
      }
    });
  };
  return (
    <section className="container-fluid py-3 px-2"
      style={ {boxShadow: '0 0 7px 1px #3e9fce', borderRadius: '10px'} }
    >
      <table className="w-100">
        <tbody>
          <tr>
            <td>
              <span id="street" style={ {marginRight: '1rem'} }>Calle: </span>
            </td>
            <td>
              <input type="text" className="form-control mb-3"
                placeholder="Calle" aria-label="Street"
                aria-describedby="street" value={ dataRoom.direction ? dataRoom.direction.street : '' }
                onChange={ (evt) => handleChangeInputs({evt, property: 'street'}) }
              />
            </td>
          </tr>
          <tr>
            <td>
              <span id="state" style={ {marginRight: '1rem'} }>Estado: </span>
            </td>
            <td>
              <input type="text" className="form-control mb-3"
                placeholder="Estado" aria-label="State"
                aria-describedby="state" value={ dataRoom.direction ? dataRoom.direction.state : '' }
                onChange={ (evt) => handleChangeInputs({evt, property: 'state'}) }
              />
            </td>
          </tr>
          <tr>
            <td>
              <span id="municipality" style={ {marginRight: '1rem'} }>Municipio: </span>
            </td>
            <td>
              <input type="text" className="form-control mb-3"
                placeholder="Municipio" aria-label="Municipality"
                aria-describedby="municipality" value={ dataRoom.direction ? dataRoom.direction.municipality : '' }
                onChange={ (evt) => handleChangeInputs({evt, property: 'municipality'}) }
              />
            </td>
          </tr>
          <tr>
            <td>
              <span id="suburb" style={ {marginRight: '1rem'} }>Colonia: </span>
            </td>
            <td>
              <input type="text" className="form-control mb-3"
                placeholder="Colonia" aria-label="Suburb"
                aria-describedby="suburb" value={ dataRoom.direction ? dataRoom.direction.suburb : '' }
                onChange={ (evt) => handleChangeInputs({evt, property: 'suburb'}) }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

DirectionRoom.propTypes = {
  dataRoom: PropTypes.oneOfType([
    PropTypes.object, PropTypes.oneOf([null])
  ]),
  setDataRoom: PropTypes.func.isRequired
};

export default DirectionRoom;