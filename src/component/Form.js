import React, {useState} from "react";
import { Link } from 'react-router-dom';

export const FormOfProduct = (props) =>{
    const initialStateValues = {
        name: "",
        codigo:'',
        stock: ''
    }

    const [values, setValues] = useState(initialStateValues)



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
        props.addProduct(values);
        setValues({...initialStateValues})
    }
    return(
      
        <div>
            <h1>Entrada de producto</h1>
        
            <form onSubmit={handleSubmit}>
                <h3>Nombre</h3>
                <input type="text" name="name" onChange={handleInputChange}  value={values.name}/>
    
                <h3>Codigo</h3>
                <input type="text" name="codigo" onChange={handleInputChange}  value={values.codigo}/>
    
                <h3>Stock</h3>
                <input type="number" name="stock" onChange={handleInputChange}  value={values.stock} />
    
                <br />
                <button>Ingresar</button>
               
            </form>
            <button><Link to={`/`}>atras</Link></button>
            
        </div>
    )
}