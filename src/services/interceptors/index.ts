import axios from "axios";

// ----------------------------------------------------------------------
const HOST_API = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: HOST_API,
});

// lay phan hoi
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response?.status === 401) {
    }
    if (response?.status === 402) {
    }
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.request.use(async (config) => {
  return {
    ...config,
  };
});

export default axiosInstance;
