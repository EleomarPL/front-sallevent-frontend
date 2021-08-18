
import axios from 'axios';

const baseAPI = 'http://localhost:4000/api/reservation';

export const getDateReservationWithStatus = async() => {
  let response = await axios.get(`${baseAPI}/get-only-date-reservations`);
  return response;
};