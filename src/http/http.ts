import axios from 'axios';



export const httpClient = async (token?: string) => axios.create({
    baseURL: "http://localhost:9092/",
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 100000
  });