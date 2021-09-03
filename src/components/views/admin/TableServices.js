import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import SpinnerLoading from '../../common/SpinnerLoading';


const TableServices = ({ keyword, services, setServices }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
  }, [keyword]);

  return (
    <div className="table-responsive mt-3"
      style={ {boxShadow: '0 0 7px 1px #3e9fce'} }
    >
      <table className="table table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Nombre del servicio</th>
            <th>Precio</th>
            <th>Detalle</th>
            <th>Modificar</th>
          </tr>
        </thead>
        <tbody>
          { services &&
            services.map(service =>
              <tr
                key={ service.id }
              >
                <td>{ service.name }</td>
                <td>{ service.price }</td>
                <td>{ service.detail }</td>
                <td><ButtonModifyService onClick={ () => console.log('Modificar servicio') } /></td>
              </tr>
            )

          }
        </tbody>
      </table>
      { isLoading &&
        <SpinnerLoading />
      }
    </div>
  );
};

const ButtonModifyService = ({ onClick }) => {
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={ onClick }
    >
      Modificar
    </button>
  );
};

ButtonModifyService.propTypes = {
  onClick: PropTypes.func
};
TableServices.propTypes = {
  keyword: PropTypes.string.isRequired,
  services: PropTypes.oneOfType([
    PropTypes.array, PropTypes.oneOf([null])
  ]),
  setServices: PropTypes.func.isRequired
};

export default TableServices;