import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import { BiUserCircle } from 'react-icons/bi';

const NavbarPrivado = () => {

    const { logout } = useAuth0();
    const cerrarSesion = () => {
        logout({ returnTo: window.location.origin });
        localStorage.setItem('token', null);
    }

    return (
        <>
            <header className='header'>
                <div className="header-container">
                    <Link className="header-container__title" to='/'>Tienda</Link>
                    <div className='header-container__icon-login header-icons'>
                    <BiUserCircle onClick={() => cerrarSesion()}></BiUserCircle>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavbarPrivado
