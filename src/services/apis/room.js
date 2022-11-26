
import axios from 'axios';
import { BASE_API } from './BASE_API';

const baseAPI = `${BASE_API}room`;

export const getDataFooter = async() => {
  let response = await axios.get(`${baseAPI}/get-info-footer`);
  return response;
};
export const getInfoRoom = async() => {
  let response = await axios.get(`${baseAPI}/get-info-room`);
  return response;
};
export const updateInfoRoom = async({
  name, capacity, description, priceHour, street, state, municipality, suburb,
  sunday, monday, tuesday, wednesday, thursday, friday, saturday, token
}) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  let response = await axios.put(`${baseAPI}/update-info-room`, {
    name, capacity, description, priceHour, street, state, municipality, suburb,
    sunday, monday, tuesday, wednesday, thursday, friday, saturday
  }, config);
  return response;
};