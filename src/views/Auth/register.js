import React, {useState} from 'react'; 
import uniqid from 'uniqid' 
import axios from 'axios'; 

const Register = () => {

    const[nombre, setNombre]=useState('')
    const[apellido, setApellido]=useState('')
    const[correo, setCorreo]=useState('')
    const[password, setPassword]=useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[fechaNac, setFechaNac]=useState('')


    const register = ()=>{
        console.log('addUser')
        let user ={
            nombre : nombre,
            apellido : apellido,
            correo : correo,
            contraseña : password,
            fechaNac : fechaNac,
            idUsuario : uniqid(),
        } 
        console.log(user)

        axios.post('/api/usuario/register', user)
        .then(res =>{
            alert(res.data)
        })
        .then(err =>{
            console.log(err)
        })

    }
    return(
        <div className='container'>
            <div className='row'>
                    <h2 className= 'mt-4'>Agregar nuevo producto</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div>
                        <label htmlFor="nombre" className='form-label'>Nombre</label>
                        <input type="text" className='fomr-control' value={nombre}onChange={(e) =>{setNombre(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="apellido" className='form-label'>Apellido</label>
                        <input type="text" className='fomr-control' value={apellido} onChange={(e) =>{setApellido(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="email" className='form-label'>correo</label>
                        <input type="text" className='fomr-control' value={correo} onChange={(e) =>{setCorreo(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="password" className='form-label'>Contraseña</label>
                        <input type="text" className='fomr-control' value ={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className='form-label'>Confirmar contraseña</label>
                        <input type="text" className='fomr-control' value={confirmPassword} onChange={(e) =>{setConfirmPassword(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="fechaNacimiento" className='form-label'>Fecha Nacimiento</label>
                        <input type="date" className='fomr-control' value={fechaNac} onChange={(e) =>{setFechaNac(e.target.value)}}></input>
                    </div>

                    <button onClick={register} className="btn btn-dark">Registrarse</button>
                </div>
            </div>
        </div>  
    )
}

export default Register