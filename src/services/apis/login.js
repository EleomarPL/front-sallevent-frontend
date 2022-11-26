import axios from 'axios';
import { BASE_API } from './BASE_API';

const baseAPI = `${BASE_API}login`;

export const login = async({ userName, password }) => {
  let response = await axios.post(`${baseAPI}/`, { userName, password});
  return response;
};