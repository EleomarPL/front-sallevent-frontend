import { useState } from 'react';

import {isObjectValuesNull, validateLength, isNumberValue, isValidateEmail}
  from '../../services/validations/generalValidations';
import useContact from '../../hooks/useContact';
import SpinnerButtonLoading from '../../components/common/SpinnerButtonLoading';

import '../../styles/stylesContact.css';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {createMessageContact} = useContact();

  const handleSubmitMessageContact = (evt) => {
    evt.preventDefault();

    let dataMessageContact = {
      fullName: {
        name: 'Nombre completo',
        minLength: 2,
        maxLength: 200,
        value: evt.target[0].value
      },
      email: {
        name: 'Correo electronico',
        minLength: 10,
        maxLength: 80,
        value: evt.target[1].value
      },
      phone: {
        name: 'Telefono',
        minLength: 9,
        maxLength: 14,
        value: evt.target[2].value
      },
      text: {
        name: 'Mensaje',
        minLength: 2,
        maxLength: 300,
        value: evt.target[3].value
      }
    };
    if ( !isObjectValuesNull(dataMessageContact) && validateLength(dataMessageContact) ) {
      if ( isNumberValue({name: 'Telefono', value: dataMessageContact['phone'].value}) &&
        isValidateEmail(dataMessageContact['email'].value)) {
        
        setIsLoading(true);
        createMessageContact({
          fullName: dataMessageContact.fullName.value,
          email: dataMessageContact.email.value,
          phone: dataMessageContact.phone.value,
          text: dataMessageContact.text.value
        }).then( () => {
          setIsLoading(false);

          evt.target[0].value = '';
          evt.target[1].value = '';
          evt.target[2].value = '';
          evt.target[3].value = '';
        }).catch(() => {
          setIsLoading(false);
        });
      }
    }
  };

  return (
    <section className="container pt-lg-2">
      <div className="container-background w-100 border-radius-contact">
        <div className="w-100 d-flex flex-wrap bg-contact border-radius-contact text-white px-lg-3">
          <article className="mb-5 px-2 pt-4 px-sm-3 col-lg-6 pr-lg-5 pt-lg-5">
            <h3 className="text-center font-weight-bold">Contactanos</h3>
            <p className="text-justify px-lg-3" style={ {lineHeight: '1.3'} }>
              ¿Tienes ganas de contactarnos? Envíenos sus consultas aquí y nos pondremos en contacto con usted lo antes posible
            </p>
          </article>
          <article id="container-form" className="bg-dark px-2 py-3 p-sm-3 col-lg-6 my-lg-5">
            <form onSubmit={ handleSubmitMessageContact } className="form-contact">
              <div className="form-group input">
                <label htmlFor="full_name">Nombre completo:</label>
                <input
                  type="text" name="full_name"
                  id="full_name" className="w-100 bg-dark"
                  required autoFocus
                />
                <div className="animation-focus">
                  <div className="left"></div>
                  <div className="right"></div>
                </div>
              </div>
              <div className="form-group input">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email" name="email"
                  id="email" className="w-100 bg-dark"
                  required
                />
                <div className="animation-focus">
                  <div className="left"></div>
                  <div className="right"></div>
                </div>
              </div>
              <div className="form-group input">
                <label htmlFor="telphone">Teléfono/Cel:</label>
                <input
                  type="tel" name="telphone"
                  id="telphone" className="w-100 bg-dark"
                  required
                />
                <div className="animation-focus">
                  <div className="left"></div>
                  <div className="right"></div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="msg">Mensaje:</label>
                <textarea name="msg" id="msg"
                  cols="30" rows="5"
                  className="form-control bg-dark"
                  style={ {color: 'white', resize: 'none'} }
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning btn-block text-white mt-2"
                disabled={ isLoading }
              >
                { isLoading &&
                  <SpinnerButtonLoading />
                }
                Envía un mensaje
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;