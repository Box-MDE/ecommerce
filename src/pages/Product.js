import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ProductoElegido } from '../utils/api'
import { useParams } from 'react-router-dom'
import '../_main.scss'
import '../scss/_product.scss'

const Product = () => {

    let { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchProductos = async () => {
        setLoading(true);
            await ProductoElegido(
                id,
                (response) => {
                  console.log('la respuesta que se recibio fue', response);
                  setProductos(response.data);
                  setEjecutarConsulta(false);
                  setLoading(false);
                  console.log('producto traido' ,productos)
                },
                (error) => {
                  console.error('Salio un error:', error);
                  setLoading(false);
                }
              );
            };
            console.log('consulta', ejecutarConsulta);
            if (ejecutarConsulta) {
              fetchProductos();
            }
          }, [ejecutarConsulta, productos, id]);
        
          useEffect(() => {
            //obtener lista de vehículos desde el backend
              setEjecutarConsulta(true);
          }, []);

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
                        <div className='img-product__img'>
                          <img className='img-product_fetch' src={productos.url} alt={productos.titulo} />
                        </div>
                    </div>
                    <div className='desc-content__resume-product'>
                        <span>{productos.titulo}</span>
                        <h2>{productos.descripcion}</h2>
                        <span> ${productos.precio}</span>
                        <span><br></br>Formas de Pago</span>
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