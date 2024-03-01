import axios from 'axios';

// Configuración de Axios con la URL base
const baseURL = process.env.VUE_APP_PASS_BASE_URL;
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
