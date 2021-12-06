import axios from 'axios';
export const authaxios = axios.create({
  // baseURL: 'http://localhost:4000/api/v1',
  baseURL: 'https://rocky-eyrie-75260.herokuapp.com/api/v1',

  headers: {
    authorization: `Bearer ${localStorage.token ? localStorage.token : ''}`
  }
});
export const instance = axios.create({
  // baseURL: 'http://localhost:4000/api/v1',
  baseURL: 'https://rocky-eyrie-75260.herokuapp.com/api/v1',

});

