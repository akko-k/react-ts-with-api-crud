import axios, { AxiosError } from 'axios';

const BASE_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export const globalAxios = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const isAxiosError = (error: any): error is AxiosError => !!error.isAxiosError;
