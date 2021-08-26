import React from 'react';

const ButtonBook = () => {
  const handleBook = () => {

  };
  
  return (
    <div className="d-flex align-items-center">
      <i className="bi bi-cart-plus-fill" style={ {fontSize: '1.6rem', marginRight: '0.3rem'} }></i>
      <button
        type="button"
        className="btn btn-dark btn-sm"
        onClick={ handleBook }
      >
        Reservar día
      </button>
    </div>
  );
};

export default ButtonBook;