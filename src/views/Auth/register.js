import React,{useState} from 'react';
import uniqid from 'uniqid';
import axios from 'axios';

const Register = () => {

    //hooks
    const[nombre, setNombre] = useState('')
    const[apellido, setApellido] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[fechaNacimiento, setFechaNacimiento] = useState('')
    const[IdUsuario, setIdUsuario] = useState('')

    const addUser = ()=>{
        var usuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password,
            fechaNacimiento: fechaNacimiento,
            IdUsuario: uniqid()
        }
        console.log(usuario)

        axios.post('/Register',usuario)
        .then(res => {
            alert(res.data)
        })
        .then(err =>{console.log(err)})
    }
    
    return(
        <div className='container'>
            <div className='row'>
                    <h2 className= 'mt-4'>Registro</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div>
                        <label htmlFor="nombre" className='form-label'>Nombre</label>
                        <input type="text" className='fomr-control' value={nombre} onChange = {(e) => {setNombre(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="apellido" className='form-label'>Apellido</label>
                        <input type="text" className='fomr-control' value={apellido} onChange = {(e) => {setApellido(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="text" className='fomr-control' value={email} onChange = {(e) => {setEmail(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="text" className='fomr-control' value={password} onChange = {(e) => {setPassword(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className='form-label'>Confirmar password</label>
                        <input type="text" className='fomr-control' value={confirmPassword} onChange = {(e) => {setConfirmPassword(e.target.value)}}></input>
                    </div>

                    <div>
                        <label htmlFor="fechaNacimiento" className='form-label'>Fecha Nacimiento</label>
                        <input type="date" className='fomr-control' value={fechaNacimiento} onChange = {(e) => {setFechaNacimiento(e.target.value)}}></input>
                    </div>

                    <button onClick={addUser} className="btn btn-dark">Registrarse</button>
                </div>
            </div>
        </div>  
    )
}

export default Register