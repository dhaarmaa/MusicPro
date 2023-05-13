import React from 'react';
import { Link } from 'react-router-dom';

const ProductIncome = () => 
    <div>
        <h1>Entrada de producto</h1>
  

        <div>
           <h3>Nombre</h3> 
           <input type="text"/>

           <h3>codigo</h3>
           <input type="text"/>

           <h3>stock</h3>
           <input type="number"/>

           <button>Ingresar</button>

        </div>
        <button><Link to={`/`}>atras</Link></button>
    </div>;
export default ProductIncome;