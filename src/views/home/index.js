import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../../component/Buttons';

const Home = () => 

<div>Home
    <h1>Almacenamiento</h1>

    <div>
        <button><Link to={`/Entrada`}>Ingreso de producto</Link></button>
        <button><Link to={`/Salida`}>Salida de producto</Link></button>
    </div>
    <Buttons/>
   
</div>;
export default Home;