import { useEffect, useState } from 'react';
import SpinnerLoading from '../../components/common/SpinnerLoading';

import TableContact from '../../components/views/admin/TableContact';
import useContact from '../../hooks/useContact';

const Contact = () => {
  const [contact, setContact] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {getAllMessagesContact} = useContact();

  useEffect(() => {
    setIsLoading(true);
    getAllMessagesContact().then(response => {
      setIsLoading(false);
      if (response !== null) {
        setContact(response);
      }
    });
  }, []);

  return (
    <section className="container-fluid">
      <h1 style={ {fontSize: '1.8rem'} } className="text-center">Mensajes de contacto</h1>
      <TableContact contact={ contact } setContact={ setContact } />
      { isLoading &&
        <SpinnerLoading />
      }
    </section>
  );
};

export default Contact;