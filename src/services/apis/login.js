import axios from 'axios';

const baseAPI = 'http://localhost:4000/api/login';


export const login = async({ userName, password }) => {
  let response = await axios.post(`${baseAPI}/`, { userName, password});
  return response;
};