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

//obtener el producto elegido
export const ProductoElegido = async (id, successCallback, errorCallback) => {
  const options = {
      method: 'GET',
      url: `http://localhost:5000/productos/${id}`,
      headers:{
        Authorization : getToken()
      },
    };
    await axios.request(options)
    .then(successCallback)
    .catch(errorCallback);
};

//obtener hogar
export const obtenerHogar = async (successCallback, errorCallback) => {
  const options = { method: 'GET', 
  url: 'http://localhost:5000/productos/hogar',
  headers:{
  Authorization : getToken() 
  }, 
};
await axios.request(options)
.then(successCallback)
.catch(errorCallback);
};

//obtener deportes
export const obtenerDeportes = async (successCallback, errorCallback) => {
  const options = { method: 'GET', 
  url: 'http://localhost:5000/productos/deportes',
  headers:{
  Authorization : getToken() 
  }, 
};
await axios.request(options)
.then(successCallback)
.catch(errorCallback);
};

//obtener tecnologia
export const obtenerTecnologia = async (successCallback, errorCallback) => {
  const options = { method: 'GET', 
  url: 'http://localhost:5000/productos/tecnologia',
  headers:{
  Authorization : getToken() 
  }, 
};
await axios.request(options)
.then(successCallback)
.catch(errorCallback);
};

//obtener mascotas
export const obtenerMascotas = async (successCallback, errorCallback) => {
  const options = { method: 'GET', 
  url: 'http://localhost:5000/productos/mascotas',
  headers:{
  Authorization : getToken() 
  }, 
};
await axios.request(options)
.then(successCallback)
.catch(errorCallback);
};

//obtener accesorios
export const obtenerAccesorios = async (successCallback, errorCallback) => {
  const options = { method: 'GET', 
  url: 'http://localhost:5000/productos/accesorios',
  headers:{
  Authorization : getToken() 
  }, 
};
await axios.request(options)
.then(successCallback)
.catch(errorCallback);
};

//obtener vestuario
export const obtenerVestuario = async (successCallback, errorCallback) => {
  const options = { method: 'GET', 
  url: 'http://localhost:5000/productos/vestuario',
  headers:{
  Authorization : getToken() 
  }, 
};
await axios.request(options)
.then(successCallback)
.catch(errorCallback);
};