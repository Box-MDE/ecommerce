import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Admin from './pages/Admin'
import { Auth0Provider } from '@auth0/auth0-react';

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
          <Route path='/product' element={<Product/>} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </Auth0Provider>
      
    </>
  );
}

export default App;
