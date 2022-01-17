import React from 'react'
import NavbarPrivado from '../components/NavbarPrivado'
import Tab from '../components/Tab'

import '../scss/_admin.scss'

const Admin = () => {
    return (
        <div>
            <NavbarPrivado />
            <div className='content'>
                <div className='tab'>
                    <Tab />
                </div>
            </div>
        </div>
    )
}

export default Admin
