import React, {useEffect, useState, useRef} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { ProductoElegidoVestuariio } from '../utils/api'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../_main.scss'
import '../scss/_payment.scss'


const stripePromise = loadStripe("pk_test_51KT6GAHmlqUgkF453XnfypA81fsfLiEo9chFIjbJvz6k1bFbQ62ZV3bcHpeEcUYWnoplK2wrAwmul0JCfyXn91Fp00PniOhUiL")

const CheckoutForm = () => {

    const isMounted = useIsMounted();
    let { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (isMounted.current){
        const fetchProductos = async () => {
          setLoading(true);
          await ProductoElegidoVestuariio(
            id,
            (response) => {
              console.log('la respuesta que se recibio en pago fue', response);
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

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement)
        });
        setLoading(true);

        if (!error){
          const am = productos.precio * 0.026;
            const {id} = paymentMethod;
            const {data} = await axios.post('http://localhost:5000/api/checkout', {
                id,
                amount: am
            });
            console.log(data);

            elements.getElement(CardElement).clear();
            setLoading(false);
        }
    }

    return (
      <div className='payment'>
        <div className='payment-content'>
          <div className='payment-descrip'>
            <h3 className='pt-5'>{productos.titulo}</h3>
            <img src={productos.url} alt={productos.title} className='img-payment pt-5 pb-5'/>
            <div className='payment-form'>
              <form onSubmit={handleSubmit}>
                <CardElement className='form-control'/>
                  <button className='btn btn-success pt-3 pb-3 pl-7 pr-7 mt-5' disabled={!stripe}>
                    {loading ? (
                      <div className="text-light" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "BUY"
                    )}
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

const PagoVestuario = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
        );
};
      
const useIsMounted = () => {
    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current = true;
        return () => (isMounted.current = false);
    }, []);
    return isMounted;
};

export default PagoVestuario