import axios from 'axios';

export const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerProductos = async (successCallback, errorCallback) => {
    const options = { method: 'GET', 
    url: 'http://localhost:5000/productos',
    headers:{
    Authorization : getToken() 
    }, 
  };
  await axios.request(options)
  .then(successCallback)
  .catch(errorCallback);
};