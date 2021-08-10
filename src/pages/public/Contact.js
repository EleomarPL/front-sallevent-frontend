import React from 'react';

import '../../styles/stylesContact.css';

const Contact = () => {

  const handleSubmitMessageContact = (evt) => {
    evt.preventDefault();

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
              >
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