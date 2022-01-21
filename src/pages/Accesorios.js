import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import '../_main.scss'
import '../scss/_banner.scss'
import '../scss/_catalog.scss'
import { obtenerAccesorios } from '../utils/api';
import { nanoid } from 'nanoid';

const Accesorios = () => {

    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProductos = async () => {
            setLoading(true);
            await obtenerAccesorios(
              (response) => {
                console.log('la respuesta que se recibio fue', response);
                setProductos(response.data);
                setEjecutarConsulta(false);
                setLoading(false);
                console.log('productos' ,productos)
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
        }, [ejecutarConsulta, productos]);
      
        useEffect(() => {
          //obtener lista de vehículos desde el backend
            setEjecutarConsulta(true);
        }, []);

  return (
    <>
        <Navbar />

        <div className="banner">
            <div className="banner-container">
                <div className='banner-container__cover'></div>
                <h1 className='banner-container__title'>Titulo del Banner</h1>
            </div>
        </div>


        <h2>Accesorios</h2>


        <div className='catalog'>
            <div className='catalog-container'>
                {productos.map(
                    (productos) => {
                        return (                                    
                            <Link to="./Product">
                                <div className='product-card'>
                                    <DatoProductos key={nanoid()} productos={productos} setEjecutarConsulta={setEjecutarConsulta} />;
                                </div>
                            </Link>                                       
                        )
                    }
                )}
            </div>
        </div>

        <Footer />
    </>
  );
};

const DatoProductos = ({ productos }) => {
    console.log('Productos: ', productos);

    return (
        <>
            <div className='product-card__img'>
                <img className='img' src={productos.url} alt={productos.titulo} />
                <h3 className='product-card__title'>{productos.titulo}</h3>
                <span className='product-card__price'>Precio: {productos.precio}</span>
                <p className='product-card__desc'>{productos.descripcion}</p>
            </div>
        </>
    )
}

export default Accesorios;
