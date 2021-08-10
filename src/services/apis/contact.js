import axios from 'axios';

const baseAPI = 'http://localhost:4000/api/contact';


export const sendMessageContact = async({ fullName, email, phone, text }) => {
  let response = await axios.post(`${baseAPI}/send-contact`, { fullName, email, phone, text });
  return response;
};