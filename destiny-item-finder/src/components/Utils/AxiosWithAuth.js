import axios from 'axios';

export const axiosWithAuth = () => {
  // const token = window.localStorage.getItem('token')

  return axios.create({
    headers: {
      // Authorization: "X-API-Key: 5b61af6f0a6a41fd9e0fd170c2fdb209"

      "X-API-Key": "5b61af6f0a6a41fd9e0fd170c2fdb209"

    },
    baseURL: 'https://www.bungie.net/Platform',
  })
};