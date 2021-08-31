import React from 'react';
import PropTypes from 'prop-types';

const BaseButtonAdmin = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={ onClick }
    >
      { children }
    </button>
  );
};

BaseButtonAdmin.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default BaseButtonAdmin;