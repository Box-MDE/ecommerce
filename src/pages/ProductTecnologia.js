import React, {useEffect, useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ProductoElegidoTecnologia } from '../utils/api'
import { useParams } from 'react-router-dom'
import '../_main.scss'
import '../scss/_product.scss'
import { Link } from 'react-router-dom';

const ProductTecnologia = () => {
    const isMounted = useIsMounted();
    let { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (isMounted.current){
        const fetchProductos = async () => {
          setLoading(true);
          await ProductoElegidoTecnologia(
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
      }
      
    }, [ejecutarConsulta, productos, id, isMounted]);
        
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
                        <span><p> $ {productos.precio}</p></span>
                        <span><br></br>Formas de Pago</span>

                        <form>
                          <Link to={`/tecnologia/create-checkout-session/id=${productos._id}`}>
                            <button type='submit'>
                              checkout
                            </button>
                          </Link>
                        </form>

                    </div>
                </div>

                <div className='product-container__features-content'>

                </div>
            </div>

            <Footer />
        </>
    )
}

const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);
  return isMounted;
};

export default ProductTecnologia