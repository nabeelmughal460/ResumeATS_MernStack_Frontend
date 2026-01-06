import axios from 'axios';
const instance = axios.create({
  baseURL: '/', // Replace with your backend URL
  // timeout: 5000,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});
export default instance;