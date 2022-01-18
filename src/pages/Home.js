import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import '../_main.scss'
import '../scss/_banner.scss'
import '../scss/_catalog.scss'

const Home = () => {
    return (
        <>
            <Navbar />

            <div className="banner">
                <div className="banner-container">
                    <div className='banner-container__cover'></div>
                    <h1 className='banner-container__title'>Titulo del Banner</h1>
                </div>
            </div>

            <div className='catalog'>
                <div className='catalog-container'>
                    <Link to="./Product.js">
                        <div className='product-card'>
                            <div className='product-card__img'></div>
                            <h3 className='product-card__title'>Caja Misteriosa</h3>
                            <span className='product-card__price'>$69.69</span>
                            <p className='product-card__desc'>lorem nipsu no se que, no funciona en react</p>
                        </div>
                    </Link>
                    <div className='product-card'>
                        <div className='product-card__img'></div>
                        <h3 className='product-card__title'>Caja Misteriosa</h3>
                        <span className='product-card__price'>$69.69</span>
                        <p className='product-card__desc'>lorem nipsu no se que, no funciona en react</p>
                    </div>
                    <div className='product-card'>
                        <div className='product-card__img'></div>
                        <h3 className='product-card__title'>Caja Misteriosa</h3>
                        <span className='product-card__price'>$69.69</span>
                        <p className='product-card__desc'>lorem nipsu no se que, no funciona en react</p>
                    </div>
                    <div className='product-card'>
                        <div className='product-card__img'></div>
                        <h3 className='product-card__title'>Caja Misteriosa</h3>
                        <span className='product-card__price'>$69.69</span>
                        <p className='product-card__desc'>lorem nipsu no se que, no funciona en react</p>
                    </div>
                    <div className='product-card'>
                        <div className='product-card__img'></div>
                        <h3 className='product-card__title'>Caja Misteriosa</h3>
                        <span className='product-card__price'>$69.69</span>
                        <p className='product-card__desc'>lorem nipsu no se que, no funciona en react</p>
                    </div>
                    <div className='product-card'>
                        <div className='product-card__img'></div>
                        <h3 className='product-card__title'>Caja Misteriosa</h3>
                        <span className='product-card__price'>$69.69</span>
                        <p className='product-card__desc'>lorem nipsu no se que, no funciona en react</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home
