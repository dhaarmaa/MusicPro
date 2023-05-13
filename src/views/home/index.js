import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => 

<div>Home
    <h1>Almacenamiento</h1>

    <div>
        <button><Link to={`/Entrada`}>Ingreso de producto</Link></button>
        <button><Link to={`/Salida`}>Salida de producto</Link></button>
    </div>
</div>;
export default Home;