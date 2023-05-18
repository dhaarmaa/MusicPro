import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className='container'>
            <div className='row'>
                    <h2 className= 'mt-4'>Login</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>

                    <div>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="text" className='fomr-control'></input>
                    </div>

                    <div>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="text" className='fomr-control'></input>
                    </div>
                    <br />
                    <button className="btn btn-dark">Inicar Sesion</button> 
                    <br />
                    <Link to={`/Register`}>Registrarse</Link>
                </div>
            </div>
        </div>
    )
}
export default Login