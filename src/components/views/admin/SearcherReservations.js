import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearcherReservations = ({reservationsToSearcher, setReservationsToSearcher}) => {
  const [selectVale, setSelectValue] = useState(reservationsToSearcher);
  
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="searchreservations">Options</label>
      <select className="form-select" id="searchreservations"
        value={ selectVale }
        onChange={ (evt) => setSelectValue(evt.target.value) }
      >
        <option value="all">Todos</option>
        <option value="confirmed">Confirmado</option>
        <option value="notConfirmed">Por confirmar</option>
      </select>
      <button
        onClick={ () => setReservationsToSearcher(selectVale) }
        type="button"
        className="btn btn-success"
      >
        Buscar
      </button>
    </div>
  );
};

SearcherReservations.propTypes = {
  reservationsToSearcher: PropTypes.string.isRequired,
  setReservationsToSearcher: PropTypes.func.isRequired
};

export default SearcherReservations;