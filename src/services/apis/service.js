import axios from 'axios';

const baseAPI = 'http://localhost:4000/api/service';


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