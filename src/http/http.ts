import axios from 'axios';



export const httpClient = async (token?: string) => axios.create({
    baseURL: "http://localhost:3002/api/",
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 100000
  });