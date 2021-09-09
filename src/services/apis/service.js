import axios from 'axios';

// const baseAPI = 'http://localhost:4000/api/service';
const baseAPI = 'https://sleepy-island-14614.herokuapp.com/api/service';


export const getAllServices = async() => {
  
  let response = await axios.get(`${baseAPI}/get-all-services`);
  return response;
};
export const searchServices = async({keyword}) => {
  let response = await axios.get(`${baseAPI}/get-all-services/${keyword}`);
  return response;
};
export const quotationReservation = async({listServices, timeStart, timeEnd}) => {
  let response = await axios.post(`${baseAPI}/quotation`, {
    listServices, timeStart, timeEnd
  });
  return response;
};
export const createService = async({name, detail, price, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.post(`${baseAPI}/create-service`, {
    name, detail, price
  }, config);
  return response;
};
export const updateService = async({idService, name, detail, price, token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.put(`${baseAPI}/edit-service/${idService}`, {
    name, detail, price
  }, config);
  return response;
};