import { Modal } from 'bootstrap';
import PropTypes from 'prop-types';

export const openmodalReadMessageContactUser = () => {
  let myModal = new Modal(
    document.getElementById('modalReadMessageContact'), {
      keyboard: true,
      focus: true
    }
  );
  myModal.handleUpdate();
  myModal.show();
};

const ModalReadMessageContact = ({ dataMessageContact }) => {
  return (
    <div className="modal fade" id="modalReadMessageContact"
      tabIndex="-1" aria-labelledby="modalReadMessageContactLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-normal" id="modalReadMessageContactLabel">
              Leer mensaje
            </h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <div className="input-group mb-3">
              <span className="input-group-text" id="fullname">
                <i className="bi bi-person-circle" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <input
                type="text" className="form-control"
                placeholder="Nombre completo" aria-label="FullName"
                aria-describedby="fullname"
                disabled={ true }
                defaultValue={ dataMessageContact && dataMessageContact.fullName || '' }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="email">
                <i className="bi bi-envelope-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <input
                type="email" className="form-control"
                placeholder="Nombre completo" aria-label="Email"
                aria-describedby="email"
                disabled={ true }
                defaultValue={ dataMessageContact && dataMessageContact.email || '' }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="phone">
                <i className="bi bi-telephone-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <input
                type="tel" className="form-control"
                placeholder="Telefono" aria-label="Phone"
                aria-describedby="phone"
                disabled={ true }
                defaultValue={ dataMessageContact && dataMessageContact.phone || '' }
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-chat-left-text-fill" style={ {fontSize: '1.2rem'} }></i>
              </span>
              <textarea className="form-control" aria-label="message"
                disabled={ true }
                defaultValue={ dataMessageContact && dataMessageContact.text || '' }
              >

              </textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
              data-bs-dismiss="modal">Salir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalReadMessageContact.propTypes = {
  dataMessageContact: PropTypes.oneOfType([
    PropTypes.object, PropTypes.oneOf([null])
  ])
};

export default ModalReadMessageContact;