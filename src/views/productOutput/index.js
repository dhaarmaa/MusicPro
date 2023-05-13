import React from 'react';
import { Link } from 'react-router-dom';

const ProductOutput = () => 
    <div>
        <h1>salida de producto</h1>
        <button><Link to={`/`}>atras</Link></button>
    </div>;
export default ProductOutput;