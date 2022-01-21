import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';
import '../_main.scss'
import '../scss/_navbar.scss'

import { BiUserCircle } from 'react-icons/bi';
import { BiCartAlt } from 'react-icons/bi';
import { BiInfoCircle } from 'react-icons/bi';

const Navbar = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <header className='header'>
                <div className="header-container">
                    <Link className="header-container__title" to='/'>Tienda</Link>
                    <input className='header-container__search-bar' placeholder='Buscar Producto'></input>
                    <div className='header-container__icon-content'>
                        <div className='header-container__icon-info header-icons'>
                            <BiInfoCircle />
                        </div>
                        <div className='header-container__icon-cart header-icons'>
                            <BiCartAlt />
                        </div>
                        <div className='header-container__icon-login header-icons'>
                           <BiUserCircle onClick={() => loginWithRedirect()}></BiUserCircle>
                        </div>
                    </div>
                    
                </div>
            </header>

            <nav className="navbar">
                <ul className='navbar-list'>
                    <Link to='/hogar-y-jardin' className='navbar-list__item'>Hogar y Jardin</Link>
                    <Link to='/deportes' className='navbar-list__item'>Deportes</Link>
                    <Link to='/tecnologia' className='navbar-list__item'>Tecnologia</Link>
                    <Link to='/mascotas' className='navbar-list__item'>Mascotas</Link>
                    <Link to='/accesorios' className='navbar-list__item'>Accesorios</Link>
                    <Link to='/vestuario' className='navbar-list__item'>Vestuario</Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
