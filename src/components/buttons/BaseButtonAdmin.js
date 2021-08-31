import React from 'react';
import PropTypes from 'prop-types';

const BaseButtonAdmin = ({ onClick, children, type = 0}, props) => {
  return (
    <button
      type={ type === 1 ? 'submit' : 'button' }
      { ...props }
      className="btn btn-primary"
      onClick={ onClick }
    >
      { children }
    </button>
  );
};

BaseButtonAdmin.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.number
};

export default BaseButtonAdmin;