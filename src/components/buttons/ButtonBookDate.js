import React from 'react';
import PropTypes from 'prop-types';

import {useHistory} from 'react-router-dom';

const ButtonBookDay = ({date}) => {
  const history = useHistory();

  const handleBook = () => {
    history.push('/my/book');
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