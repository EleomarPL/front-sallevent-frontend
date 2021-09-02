import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

const PersonalizedSearcher = ({ title, value, setValue }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      <div className="fw-bold" style={ {fontSize: '1.5rem'} }>{ title }</div>
      <div className="input-group w-50">
        <span className="input-group-text" id="search"><i className="bi bi-search"></i></span>
        <DebounceInput
          minLength={ 2 }
          type="text"
          aria-label="Buscar"
          aria-describedby="search"
          className="form-control"
          debounceTimeout={ 500 }
          onChange={ setValue }
          value={ value }
          placeholder="Nombre de usuario - min 2 palabras"
        />
      </div>
    </div>
  );
};

PersonalizedSearcher.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default PersonalizedSearcher;