import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../../component/Buttons';

const Home = () => {

    const listProduct = ()=>{
        console.log('listar')
    }



    //editar
    const editProduct = ()=>{
    console.log('editar')
    }

    //eliminar
    const deleteProduct = () =>{
        console.log('eliminar')
    }

    return(
    <div>
        <h1>Almacenamiento</h1>
        {/* <UsuarioIndividual */}

        <div>
            <button><Link to={`/Entrada`}>Ingreso de producto</Link></button>
            <button><Link to={`/Salida`}>Salida de producto</Link></button>
        </div>
        <Buttons/>
   
    </div>
        )

}
export default Home;