
import axios from 'axios';

const baseAPI = 'http://localhost:4000/api/reservation';

export const getDateReservationWithStatus = async() => {
  let response = await axios.get(`${baseAPI}/get-only-date-reservations`);
  return response;
};
export const getReservations = async({token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.get(`${baseAPI}/get-reservations`, config);
  return response;
};