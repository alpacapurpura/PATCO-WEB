import axios from 'axios';
import Swal from 'sweetalert2';
import { encriptado } from '../common/Utilitarios';

let instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    let dato = new Date().getTime();
    config.headers['sol-rr'] = encriptado(dato.toString());
    config.headers['Content-type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (!error.response) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: 'error',
        title: 'Error en el servicio',
      });

      return Promise.reject({ data: 'Error' });
    }

    if (error.response.data.detail) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: error.response.status === 500 ? 'error' : 'warning',
        title: error.response.data.detail,
      });
    }

    return Promise.reject(error.response);
  }
);

export const api = instance;
