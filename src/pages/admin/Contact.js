import React, { useState } from 'react';

import TableContact from '../../components/views/admin/TableContact';

const Contact = () => {
  const [contact, setContact] = useState([]);

  return (
    <section className="container-fluid">
      <h1 style={ {fontSize: '1.8rem'} } className="text-center">Mensajes de contacto</h1>
      <TableContact contact={ contact } setContact={ setContact } />
    </section>
  );
};

export default Contact;