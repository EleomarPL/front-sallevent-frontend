import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import SpinnerButtonLoading from '../common/SpinnerButtonLoading';
import BaseButtonAdmin from '../buttons/BaseButtonAdmin';

const FormUpdateData = ({handleSubmitUpdateDataUser, userData = {}, isLoading, children, textButton}) => {

  return (
    <form onSubmit={ handleSubmitUpdateDataUser }>
      <div className="input-group mb-3">
        <span className="input-group-text" id="username">
          <i className="bi bi-person-circle" style={ {fontSize: '1.2rem'} }></i>
        </span>
        <InputGroupWithState
          type="text"
          ariaDescribedBy="username"
          ariaLabel="Username"
          placeholder="Usuario"
          value={ userData.userName && userData.userName }
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-person-fill" style={ {fontSize: '1.2rem'} }></i>
        </span>
        <div className="form-control px-0">
          <InputGroupWithState
            type="text"
            ariaDescribedBy=""
            ariaLabel="Name"
            placeholder="Nombre"
            value={ userData.name && userData.name }
            isInGroup={ true }
          />
          <InputGroupWithState
            type="text"
            ariaDescribedBy=""
            ariaLabel="LastName"
            placeholder="Apellido paterno"
            value={ userData.lastName && userData.lastName }
            isInGroup={ true }
          />
          <InputGroupWithState
            type="text"
            ariaDescribedBy=""
            ariaLabel="MotherLastName"
            placeholder="Apellido materno"
            value={ userData.motherLastName && userData.motherLastName }
            isInGroup={ true }
          />
        </div>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="email">
          <i className="bi bi-envelope-fill" style={ {fontSize: '1.2rem'} }></i>
        </span>
        <InputGroupWithState
          type="email"
          ariaDescribedBy="email"
          ariaLabel="Email"
          placeholder="Email"
          value={ userData.email && userData.email }
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="phone">
          <i className="bi bi-telephone-fill" style={ {fontSize: '1.2rem'} }></i>
        </span>
        <InputGroupWithState
          type="tel"
          ariaDescribedBy="phone"
          ariaLabel="Phone"
          placeholder="Telefono"
          value={ userData.phone && userData.phone }
        />
      </div>
      { children }
      <div className="d-flex flex-wrap justify-content-center">
        <BaseButtonAdmin
          type={ 1 }
          disabled={ isLoading }
        >
          { isLoading &&
            <SpinnerButtonLoading />
          }
          { textButton }
        </BaseButtonAdmin>
      </div>
    </form>
  );
};

FormUpdateData.propTypes = {
  handleSubmitUpdateDataUser: PropTypes.func.isRequired,
  userData: PropTypes.object,
  children: PropTypes.node,
  isLoading: PropTypes.bool.isRequired,
  textButton: PropTypes.string.isRequired
};

const InputGroupWithState = ({value = '', ariaDescribedBy, ariaLabel, placeholder, type, isInGroup = false}) => {
  const [valueInput, setValue] = useState(value);
  useEffect(() => {
    setValue(value);
  }, [value]);
  
  return (
    <input
      type={ type } className={ `form-control ${isInGroup && 'mb-2'}` }
      style={ {borderRadius: `${isInGroup && 0}`} }
      placeholder={ placeholder } aria-label={ ariaLabel }
      aria-describedby={ ariaDescribedBy }
      value={ valueInput }
      onChange={ (evt) => setValue(evt.target.value) }
      required
    />
  );
};
InputGroupWithState.propTypes = {
  value: PropTypes.string,
  ariaDescribedBy: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isInGroup: PropTypes.bool
};

export default FormUpdateData;