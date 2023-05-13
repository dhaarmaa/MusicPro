import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../views/home';
import Page2 from '../views/page2';
import ProductIncome from '../views/productIncome';
import ProductOutput from '../views/productOutput';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route path='/' element={<Home/>} />
            <Route path="/page2/" element={<Page2/>} />
            <Route path="/Entrada" element= {<ProductIncome/>}/>
            <Route path="/Salida" element= {<ProductOutput/>}/>
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;