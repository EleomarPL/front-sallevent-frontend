import React from 'react';

const DataRoom = () => {
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
                aria-describedby="nameRoom"
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
                aria-describedby="capacity"
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
                aria-describedby="price"
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
              >
              </textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default DataRoom;