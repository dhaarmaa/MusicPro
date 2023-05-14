import React from 'react';
import { Link } from 'react-router-dom';

const ProductIncome = () => 
    <div>
        <h1>Entrada de producto</h1>
    
        <form >
            <h3>Nombre</h3>
            <input type="text" name="" id="" />

            <h3>Codigo</h3>
            <input type="text" name="" id="" />

            <h3>Stock</h3>
            <input type="number" name="" id="" />

            <br />
            <button>Ingresar</button>
            <button><Link to={`/`}>atras</Link></button>
        </form>
      
        
    </div>;
export default ProductIncome;