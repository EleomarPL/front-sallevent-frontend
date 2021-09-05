import React from 'react';

const DirectionRoom = () => {
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
                aria-describedby="street"
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
                aria-describedby="state"
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
                aria-describedby="municipality"
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
                aria-describedby="suburb"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default DirectionRoom;