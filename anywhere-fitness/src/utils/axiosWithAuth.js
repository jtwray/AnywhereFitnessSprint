import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  console.log('token', token);
  return axios.create({
    baseURL: `https://lambda-fitness-anywhere.herokuapp.com/api/`,
    headers: {
      Authorization: token
    }
  });
};
import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    }
  });
};
