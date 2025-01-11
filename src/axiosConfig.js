import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://callincity.com/Call_InCity/',
    headers: { 
      'Content-Type': 'application/json'
    },
  });

export default instance;