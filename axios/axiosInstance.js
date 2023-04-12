import Axios from 'axios';
import baseUrl from '../config/baseUrl';

const axiosInstance = Axios.create({
  baseURL: baseUrl.baseUrl, // Replace with your actual base URL
  timeout: 5000, // Set a timeout for requests, if needed
});

export default axiosInstance;
