import axios from 'axios';

// This logic automatically switches between production and local
const baseURL = import.meta.env.PROD 
  ? 'https://resumeatsmernstackbackend-production.up.railway.app' 
  : 'http://localhost:8080';

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true, // Required for cookies/sessions
});

export default instance;