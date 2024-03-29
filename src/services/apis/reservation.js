
import axios from 'axios';
import { BASE_API } from './BASE_API';

const baseAPI = `${BASE_API}reservation`;

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
export const createReservation = async({listSelectedServices, timeStart, timeEnd, typeEvent, dateYYMMDD, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.post(`${baseAPI}/create-reservation`, {
    listSelectedServices, timeStart, timeEnd, typeEvent, dateYYMMDD
  }, config);
  return response;
};
export const deleteReservation = async({idReservation, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.delete(`${baseAPI}/delete-reservation/${idReservation}`, config);
  return response;
};
export const getOnlyReservation = async({idReservation, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.get(`${baseAPI}/get-only-reservation/${idReservation}`, config);
  return response;
};
export const getReservationWithServices = async({idReservation, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.get(`${baseAPI}/get-reservation/${idReservation}`, config);
  return response;
};
export const updateReservacion = async({idReservation, timeEnd, timeStart, typeEvent, listSelectedServices, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.put(`${baseAPI}/edit-reservation/${idReservation}`, {
    listSelectedServices, timeStart, timeEnd, typeEvent
  },
  config);
  return response;
};
export const getAllReservations = async({token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.get(`${baseAPI}/get-reservations-admin`, config);
  return response;
};
export const confirmReservation = async({token, idReservation}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.put(`${baseAPI}/confirm-reservation/${idReservation}`, {}, config);
  return response;
};
export const verifyOpenRoom = async({dateYYMMDD}) => {
  let response = await axios.get(`${baseAPI}/verify-date-to-reservation/${dateYYMMDD}`);
  return response;
};