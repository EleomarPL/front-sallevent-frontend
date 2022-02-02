import { useContext } from 'react';

import Auth from '../../../contexts/Auth';

const DataUser = () => {
  const { userData } = useContext(Auth);

  let dataUser = {
    'Nombre completo': `${userData.name} ${userData.lastName} ${userData.motherLastName}`,
    'Correo': userData.email,
    'Telefono': userData.phone
  };
  return (
    <div className="table-responsive" style={ {maxWidth: '90vw'} }>
      <table className="w-100">
        <tbody>
          { dataUser &&
          Object.keys(dataUser).map(key =>
            <tr
              key={ key }
            >
              <td style={ {paddingBottom: '1rem'} }> { key }: </td>
              <td style={ {paddingBottom: '1rem'} }> { dataUser[key] } </td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>
  );
};

export default DataUser;