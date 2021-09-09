import axios from 'axios';

// const baseAPI = 'http://localhost:4000/api/login';
const baseAPI = 'https://sleepy-island-14614.herokuapp.com/api/login';


export const login = async({ userName, password }) => {
  let response = await axios.post(`${baseAPI}/`, { userName, password});
  return response;
};