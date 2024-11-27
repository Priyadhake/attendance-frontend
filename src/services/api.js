import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this URL based on your backend
});

export default api;