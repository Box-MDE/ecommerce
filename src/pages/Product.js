import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../_main.scss'
import '../scss/_product.scss'

const Product = () => {
    return (
        <>
            <Navbar />

            <div className='product-container'>
                <div className='product-container__desc-content'>
                    <div className='desc-content__img-product'>
                        <div className='img-product__carousel'>
                            <div className='carousel__img'></div>
                            <div className='carousel__img'></div>
                            <div className='carousel__img'></div>
                        </div>
                        <div className='img-product__img'></div>
                    </div>
                    <div className='desc-content__resume-product'>
                        <span>Producto Nuevo</span>
                        <h2>Caja Misteriosa</h2>
                        <span>$696.969</span>
                        <span>Formas de Pago</span>
                    </div>
                </div>

                <div className='product-container__features-content'>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Product