import axios from 'axios';

const baseAPI = 'http://localhost:4000/api/user';


export const createUser = async({ name, lastName, motherLastName, phone, email, userName, password }) => {
  
  let response = await axios.post(`${baseAPI}/create-user`,
    {
      name, lastName, motherLastName, phone, email, userName, password
    });
  return response;
};