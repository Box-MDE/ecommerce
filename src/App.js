import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Admin from './pages/Admin'
import { Auth0Provider } from '@auth0/auth0-react';
import Hogar from './pages/Hogar'
import Deportes from './pages/Deportes'
import Tecnologia from './pages/Tecnologia';
import Mascotas from './pages/Mascotas';
import Accesorios from './pages/Accesorios';
import Vestuario from './pages/Vestuario';
import Pago from './pages/Pago';
import PagoHogar from './pages/PagoHogar';
import ProductHogar from './pages/ProductHogar';
import PagoDeportes from './pages/PagoDeportes';
import ProductDeportes from './pages/ProductDeportes';
import PagoTecnologia from './pages/PagoTecnologia';
import ProductTecnologia from './pages/ProductTecnologia';
import PagoMascotas from './pages/PagoMascotas';
import ProductMascotas from './pages/ProductMascotas';
import PagoAccesorios from './pages/PagoAccesorios';
import ProductAccesorios from './pages/ProductAccesorios';
import PagoVestuario from './pages/PagoVestuario';
import ProductVestuario from './pages/ProductVestuario';

function App() {
  return (
    <>
    <Auth0Provider
      domain="box-mde.us.auth0.com"
      clientId="jEAWro8VXuB4SHPI2Rte5uYzehzcpg8G"
      redirectUri={"http://localhost:3000/admin"}
    >
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hogar-y-jardin' element={<Hogar />} />
          <Route path='/deportes' element={<Deportes />} />
          <Route path='/tecnologia' element={<Tecnologia />} />
          <Route path='/mascotas' element={<Mascotas />} />
          <Route path='/accesorios' element={<Accesorios />} />
          <Route path='/vestuario' element={<Vestuario />} />

          <Route path='/product/:id' element={<Product />} />
          <Route path='/hogar/:id' element={<ProductHogar />} />
          <Route path='/deportes/:id' element={<ProductDeportes />} />
          <Route path='/tecnologia/:id' element={<ProductTecnologia />} />
          <Route path='/mascotas/:id' element={<ProductMascotas />} />
          <Route path='/accesorios/:id' element={<ProductAccesorios />} />
          <Route path='/vestuario/:id' element={<ProductVestuario />} />

          <Route path='/create-checkout-session/:id' element={<Pago/>} />
          <Route path='/hogar/create-checkout-session/:id' element={<PagoHogar/>} />
          <Route path='/deportes/create-checkout-session/:id' element={<PagoDeportes/>} />
          <Route path='/tecnologia/create-checkout-session/:id' element={<PagoTecnologia/>} />
          <Route path='/mascotas/create-checkout-session/:id' element={<PagoMascotas/>} />
          <Route path='/accesorios/create-checkout-session/:id' element={<PagoAccesorios/>} />
          <Route path='/vestuario/create-checkout-session/:id' element={<PagoVestuario/>} />
          
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </Auth0Provider>
      
    </>
  );
}

export default App;
