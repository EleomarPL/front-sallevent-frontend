import axios from 'axios';

// const baseAPI = 'http://localhost:4000/api/contact';
const baseAPI = 'https://sleepy-island-14614.herokuapp.com/api/contact';


export const sendMessageContact = async({ fullName, email, phone, text }) => {
  let response = await axios.post(`${baseAPI}/send-contact`, { fullName, email, phone, text });
  return response;
};
export const getAllMessagesContact = async({token}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.get(`${baseAPI}/get-all-messages`, config);
  return response;
};
export const deleteMessageContact = async({token, idMessageContact}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.delete(`${baseAPI}/delete-message-contact/${idMessageContact}`, config);
  return response;
};