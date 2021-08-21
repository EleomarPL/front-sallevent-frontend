
import axios from 'axios';

const baseAPI = 'http://localhost:4000/api/room';

export const getDataFooter = async() => {
  let response = await axios.get(`${baseAPI}/get-info-footer`);
  return response;
};