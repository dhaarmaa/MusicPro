import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const ProductIncome = () => {

    const [values, setValues] = useState({
        name: "",
        codigo:'',
        stock: ''
    })

    // const handleInputChange = e =>{
    //     console.log(e.target.values)
    // }

    const handleInputChange = e =>{
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }
    

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(values)
    }
    return(
      
        <div>
            <h1>Entrada de producto</h1>
        
            <form onSubmit={handleSubmit}>
                <h3>Nombre</h3>
                <input type="text" name="name" onChange={handleInputChange} />
    
                <h3>Codigo</h3>
                <input type="text" name="codigo" onChange={handleInputChange} />
    
                <h3>Stock</h3>
                <input type="number" name="stock" onChange={handleInputChange} />
    
                <br />
                <button>Ingresar</button>
               
            </form>
            <button><Link to={`/`}>atras</Link></button>
            
        </div>
    )
}
export default ProductIncome;