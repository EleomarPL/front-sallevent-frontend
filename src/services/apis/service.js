import axios from 'axios';

const baseAPI = 'http://localhost:4000/api/service';


export const getAllServices = async() => {
  
  let response = await axios.post(`${baseAPI}/get-all-services`);
  return response;
};