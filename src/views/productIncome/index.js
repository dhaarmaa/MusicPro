import React, {useState} from "react";

const ProductIncome = ()=>{
    
    //agregar
    const addProduct = ()=>{
        console.log('add')
    }

    return(
      <div className='container'>
            <div className='row'>
                    <h2 className= 'mt-4'>Agregar nuevo producto</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div>
                        <label htmlFor="codigo" className='form-label'>Codigo</label>
                        <input type="text" className='fomr-control'></input>
                    </div>

                    <div>
                        <label htmlFor="nombre" className='form-label'>Nombre</label>
                        <input type="text" className='fomr-control'></input>
                    </div>

                    <div>
                        <label htmlFor="descripcion" className='form-label'>Descripcion</label>
                        <input type="text" className='fomr-control'></input>
                    </div>

                    <div>
                        <label htmlFor="precio" className='form-label'>Precio</label>
                        <input type="text" className='fomr-control'></input>
                    </div>

                    <div>
                        <label htmlFor="imagen" className='form-label'>Imagen</label>
                        <input type="text" className='fomr-control'></input>
                    </div>

                    <button onClick={addProduct} className="btn btn-dark">Guardar producto</button>
                </div>
            </div>
        </div>  
    )
}

export default ProductIncome