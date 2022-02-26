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

          <Route path='/create-checkout-session/:id' element={<Pago/>} />
            
          
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </Auth0Provider>
      
    </>
  );
}

export default App;
