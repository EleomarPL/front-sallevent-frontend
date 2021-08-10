/* eslint-disable no-useless-escape */
/* eslint-disable semi */

import { notifyWarning } from '../../consts/notifications';

export const isObjectValuesNull = (objectData) => {
  let isNull = false;

  Object.keys(objectData).forEach(key => {
    if (objectData[key].value.trim() === '') {
      isNull = true;
      notifyWarning('Rellene todos los campos');
      return isNull;
    }
  });
  
  return isNull;
};
export const validateLength = ( objectData ) => {
  let isCorrectValue = true;

  Object.keys(objectData).forEach(key => {
    
    let value = objectData[key].value.length;

    if (value < objectData[key].minLength || value > objectData[key].maxLength) {
      isCorrectValue = false;
      notifyWarning(`${objectData[key].name} debe tener de ${objectData[key].minLength} a ${objectData[key].maxLength} caracteres`);
      return isCorrectValue;
    }
  });
  
  return isCorrectValue;
};
export const isNumberValue = ({ name, value }) => {
  let isNumber = true;

  if (isNaN(value)) {
    isNumber = false;
    notifyWarning(`${name} debe ser numérico`);
  }

  return isNumber;
};
export const isValidateEmail = (email) => {
  let isValidate = true;
  let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  if ( !emailRegex.test(email) ) {
    isValidate = false;
    notifyWarning('Ingresa un correo electronico valido');
  }

  return isValidate;
};