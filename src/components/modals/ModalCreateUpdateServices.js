import React, { useEffect, useState } from 'react';
import { Modal } from 'bootstrap';
import PropTypes from 'prop-types';

import {isObjectValuesNull, validateLength, isNumberValue, isValidateEmail} from '../../services/validations/generalValidations';
import SpinnerButtonLoading from '../common/SpinnerButtonLoading';

export const openmodalCreateUpdateServicesUser = () => {
  let myModal = new Modal(
    document.getElementById('modalCreateUpdateServices'), {
      keyboard: true,
      focus: true
    }
  );
  myModal.show();
};

const ModalCreateUpdateServices = ({ services, setServices, dataService }) => {

  let isCreateNewService = dataService === null;
  
  const [nameService, setNameService] = useState(isCreateNewService ? '' : dataService.name);
  const [priceService, setPriceService] = useState(isCreateNewService ? '' : dataService.price);
  const [detailService, setDetailService] = useState(isCreateNewService ? '' : dataService.detail);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setNameService(isCreateNewService ? '' : dataService.name);
    setPriceService(isCreateNewService ? '' : dataService.price);
    setDetailService(isCreateNewService ? '' : dataService.detail);
  }, [dataService]);

  return (
    <div className="modal fade" id="modalCreateUpdateServices"
      tabIndex="-1" aria-labelledby="modalCreateUpdateServicesLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-normal" id="modalCreateUpdateServicesLabel">
              { isCreateNewService ? 'Crear nuevo servicio' : 'Actualizar Servicio' }
            </h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <div className="input-group mb-3">
              <span className="input-group-text" id="name">
                <i className="bi bi-bookmark-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <input type="text" className="form-control"
                placeholder="Nombre servicio" aria-label="Name"
                aria-describedby="name" value={ nameService }
                onChange={ (evt) => setNameService(evt.target.value) }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="price">
                <i className="bi bi-currency-dollar" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <input type="number" className="form-control"
                placeholder="0" aria-label="Price"
                aria-describedby="price" value={ priceService }
                onChange={ (evt) => setPriceService(evt.target.value) }
              />
            </div>
            <div className="input-group">
              <span className="input-group-text" id="detail">
                <i className="bi bi-info-circle-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <textarea
                className="form-control"
                aria-label="Detail"
                placeholder="Detalles"
                value={ detailService }
                onChange={ (evt) => setDetailService(evt.target.value) }
              >
              </textarea>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-primary"
              >
                { isLoading &&
                  <SpinnerButtonLoading />
                }
                { isCreateNewService ? 'Crear Servicio' : 'Actualizar Servicio' }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalCreateUpdateServices.propTypes = {
  services: PropTypes.oneOfType([
    PropTypes.array, PropTypes.oneOf([null])
  ]),
  setServices: PropTypes.func.isRequired,
  dataService: PropTypes.oneOfType([
    PropTypes.object, PropTypes.oneOf([null])
  ])
};

export default ModalCreateUpdateServices;