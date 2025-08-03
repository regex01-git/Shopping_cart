import {Routes,Route} from 'react-router'
import Home from '../Components/Home'
import Cart from '../Components/Cart'
import ProductDetails from '../Components/ProductDetails'

export default function Router(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>  
            <Route path='/product-details/:id' element={<ProductDetails/>}/>  
        </Routes>
        </>
    )
}