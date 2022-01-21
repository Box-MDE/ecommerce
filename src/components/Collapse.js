import React from 'react';
import RegistrarAccesorios from './RegistrarAccesorios';
import RegistrarDeportes from './RegistrarDeportes';
import RegistrarHogar from './RegistrarHogar';
import RegistrarMascotas from './RegistrarMascotas';
import RegistrarTecnologia from './RegistrarTecnologia';
import RegistrarVestuario from './RegistrarVestuario';

const Collapse = () => {
    return (
        <>
            <p className='admin-collapse'>
                <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Hogar y Jardín
                </button>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                    Deportes
                </button>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                    Tecnología
                </button>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                    Mascotas
                </button>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
                    Acesorios
                </button>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
                    Vestuario
                </button>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <RegistrarHogar />
                </div>
            </div>
            <div className="collapse" id="collapseExample2">
                <div className="card card-body">
                    <RegistrarDeportes />
                </div>
            </div>
            <div className="collapse" id="collapseExample3">
                <div className="card card-body">
                    <RegistrarTecnologia />
                </div>
            </div>
            <div className="collapse" id="collapseExample4">
                <div className="card card-body">
                    <RegistrarMascotas />
                </div>
            </div>
            <div className="collapse" id="collapseExample5">
                <div className="card card-body">
                    <RegistrarAccesorios />
                </div>
            </div>
            <div className="collapse" id="collapseExample6">
                <div className="card card-body">
                    <RegistrarVestuario />
                </div>
            </div>
        </>
    )
};

export default Collapse;
