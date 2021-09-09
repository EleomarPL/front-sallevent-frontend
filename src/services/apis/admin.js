import axios from 'axios';

// const baseAPI = 'http://localhost:4000/api/admin';
const baseAPI = 'https://sleepy-island-14614.herokuapp.com/api/admin';

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
export const getUsers = async({keyword, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.get(`${baseAPI}/get-users/${keyword}`, config);
  return response;
};
export const deleteUser = async({id, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.delete(`${baseAPI}/delete-user/${id}`, config);
  return response;
};
export const editDataUser = async({ idUser, name, lastName, motherLastName, phone, email, userName, password, token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let dataToSend = {
    name, lastName, motherLastName, phone, email, userName
  };
  if (password) {
    dataToSend = {
      ...dataToSend,
      password
    };
  }
  let response = await axios.put(`${baseAPI}/edit-data-user/${idUser}`,
    { ...dataToSend },
    config
  );
  return response;
};
