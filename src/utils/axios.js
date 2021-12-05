import axios from 'axios';
export const authaxios = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
export const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
});

