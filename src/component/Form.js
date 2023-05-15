import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";

export const FormOfProduct = (props) => {
  const initialStateValues = {
    name: "",
    codigo: "",
    stock: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    props.addProduct(values);
    setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection('products').doc(id).get();
    setValues({...doc.data()})
  }

  useEffect(() => {
    if (props.currentId === '') {
        setValues({...initialStateValues});
    } else {
        getLinkById(props.currentId);
    }
  }, [props.currentId]);

  return (
    <div>
      <h1>Entrada de producto</h1>

      <form onSubmit={handleSubmit}>
        <h3>Nombre</h3>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={values.name}
        />

        <h3>Codigo</h3>
        <input
          type="text"
          name="codigo"
          onChange={handleInputChange}
          value={values.codigo}
        />

        <h3>Stock</h3>
        <input
          type="number"
          name="stock"
          onChange={handleInputChange}
          value={values.stock}
        />

        <br />
        <button>{props.currentId === '' ? 'save': 'update'}</button>
      </form>
      <button>
        <Link to={`/`}>atras</Link>
      </button>
    </div>
  );
};
