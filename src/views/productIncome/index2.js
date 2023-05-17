// import React, {useEffect, useState} from 'react';
// //import { Link } from 'react-router-dom';
// import { FormOfProduct } from '../../component/Form2';
// import db from '../../applicacion/Firebase';

// const ProductIncome = () => {

//       const [products, setProduct] = useState([])


//       const addProduct = async (productObject) =>{
//       //const addProduct = (productObject) =>{
//             console.log('new Product')
//             await db.collection('product').doc().set(productObject)

//       }
//       //traer los datos
//       const getProduct = async ()=>{
//             await db.collection('product').onSnapshot((querySnapshot)=>{
//                   const docs = [];
//                   querySnapshot.array.forEach(doc => {
//                         console.log(doc.data())
                        
//                         docs.push({...doc.data(), id:doc.id });
//                   })  
//                   console.log(docs)    
//                   setProduct(docs);   
//             });
//       }

//       useEffect(()=>{
//             console.log('getting data...')
//             getProduct();
//       }, [])
//    return(
//       <div>
//             <FormOfProduct addProduct = {addProduct}/>
//             <div>
           
//             </div>
            
//       </div>
//    )
// }
// export default ProductIncome;