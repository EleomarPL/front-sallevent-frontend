import React from 'react';
import PropTypes from 'prop-types';

const ButtonBookDay = ({date}) => {
  const handleBook = () => {
    console.log(date);
  };

  return (
    <button
      type="button"
      className="btn btn-dark btn-sm"
      onClick={ handleBook }
    >
      Reservar este dia
    </button>
  );
};

ButtonBookDay.propTypes = {
  date: PropTypes.string.isRequired
};

export default ButtonBookDay;