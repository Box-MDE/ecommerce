import React, {useState} from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import Viewer from 'react-viewer'

const RegistrarHogar = () => {

    const [ visible, setVisible ] = useState(false);

    const [datos, setDatos] = useState({
        titulo:'',
        precio:'',
        descripcion:'',
        url:''
    })

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/producto/nuevo/hogar',
            headers: { 'Content-Type': 'application/json' },
            data:{
                titulo: datos.titulo,
                precio: datos.precio,
                descripcion: datos.descripcion,
                url : datos.url
            },
        };
        await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            toast.success('Producto creado con éxito');
            window.Location='/admin';
        });
    }
    

    return (
        <>
        <h2>HOGAR Y JARDIN</h2>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                        required
                        id="outlined-basic" 
                        label="Título del producto" 
                        variant="outlined" 
                        name='titulo'
                        type="text"
                        onChange={handleChange}
                    />
                    <TextField 
                        required
                        id="outlined-basic" 
                        label="Precio" 
                        variant="outlined" 
                        name='precio'
                        type='number'
                        onChange={handleChange}
                    />
                    <TextField 
                        required
                        id="outlined-basic" 
                        label="Descripcion" 
                        variant="outlined"
                        name='descripcion'
                        type='text'
                        onChange={handleChange}
                    />
                    <TextField 
                        required
                        id="outlined-basic" 
                        label="Url imagen" 
                        variant="outlined"
                        name='url'
                        type='url'
                        onChange={handleChange}
                    />
                    <button onClick={(e) => { setVisible(true); e.preventDefault(); } }>show</button>
                    <Viewer
                        visible={visible}
                        onClose={() => { setVisible(false); } }
                        images={[{src: datos.url, alt: ''}]}
                    />
                </Box>
                <Button type="submit" className="button mt-3 mb-5" variant="contained">submit</Button>
                <ToastContainer
                    position="bottom-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable
                />
            </form>
            
        </div>
        </>
    )
}

export default RegistrarHogar;
