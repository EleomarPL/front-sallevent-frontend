import axios from 'axios';

const baseAPI = 'http://localhost:4000/api/admin';

export const editDataAdmin = async({ name, lastName, motherLastName, phone, email, userName, token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.put(`${baseAPI}/edit-data-admin`,
    {
      name, lastName, motherLastName, phone, email, userName
    },
    config
  );
  return response;
};
export const editPasswordAdmin = async({ oldPassword, newPassword, token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.put(`${baseAPI}/edit-password-admin`,
    { oldPassword, newPassword },
    config
  );
  return response;
};