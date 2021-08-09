import React from 'react';
import PropTypes from 'prop-types';

const CardContentHome = ({ nameImage, isImageLeft, information }) => {
  const positionImage = isImageLeft ? 'flex-lg-row' : 'flex-lg-row-reverse';

  return (
    <div
      className={ `mb-4 d-flex justify-content-center align-items-center flex-column ${positionImage}` }
    >
      <div
        className="d-flex align-items-center"
        style={ {width: '35.2rem', maxWidth: '90%'} }
      >
        <picture>
          <source
            srcSet={ require(`../../img/home/content-down/${nameImage}.webp`).default }
          />
          <img
            src={ require(`../../img/home/content-down/${nameImage}.png`).default }
            className="mw-100 mh-100"
            style={ {objectFit: 'cover', borderRadius: '10px'} }
            alt={ nameImage }
          />
        </picture>
      </div>
      <div className={ 'w-100 d-flex flex-column px-4 border-top border-left border-bottom text-justify' }>
        <p>{ information }</p>
      </div>
    </div>
  );
};

CardContentHome.propTypes = {
  nameImage: PropTypes.string.isRequired,
  isImageLeft: PropTypes.bool.isRequired,
  information: PropTypes.string.isRequired
};

export default CardContentHome;