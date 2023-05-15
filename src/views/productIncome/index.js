import { async } from "q";
import React, { useState, useEffect } from "react";
import { FormOfProduct } from "../../component/Form";
import "../button.css";
import { db } from "../firebase";

const ProductIncome = () => {
  const [products, setProducts] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const addProduct = async (productObject) => {
    if (currentId === "") {
      //const addProduct = (productObject) =>{
      await db.collection("products").doc().set(productObject);
      console.log("new Product");
    } else {
      await db.collection("products").doc(currentId).update(productObject);
      setCurrentId('');
    }
  };

  const onDeleteProduct = async (id) => {
    if (window.confirm("estas seguro de eliminar este producto?")) {
      await db.collection("products").doc(id).delete();
      console.log("product deleted");
    }
  };

  //traer los datos
  const getProduct = async () => {
    await db.collection("product").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.array.forEach((doc) => {
        console.log(doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setProducts(docs);
    });
  };

  useEffect(() => {
    console.log("getting data...");
    getProduct();
  }, []);
  return (
    <div>
      <FormOfProduct {...{ addProduct, currentId, products }} />
      <div>
        {products.map((product) => {
          <div>
            <div>
              <div>
                <h4>{product.name}</h4>
                <div>
                  <i
                    className="material-icons text-danger"
                    onClick={() => onDeleteProduct(product.id)}
                  >
                    close
                  </i>
                  <i
                    className="material-icons"
                    onClick={() => setCurrentId(product.id)}
                  >
                    create
                  </i>
                </div>
              </div>
              <p>{product.codigo}</p>
              <p>{product.stock}</p>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};
export default ProductIncome;
