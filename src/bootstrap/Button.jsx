import Button from 'react-bootstrap/Button';
// import { addproduct, removeproduct } from '../features/Products';
import { addItem, removeItem } from '../features/Cart';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Buttonclick({item}){
    const products=useSelector((store)=>store.products);
    const cart=useSelector((store)=>store.cart);
    const [added, setAdded] = useState(false);
    
    
    const dispatch=useDispatch();
    function add(e,item){
      e.stopPropagation();
    //   dispatch(addproduct(item))   
      dispatch(addItem(item))
    //   alert("Item added to cart successfully")
      
   }
   function remove(e,item){
     e.stopPropagation();
    //  alert(item)
    //   dispatch(removeproduct(item))

      dispatch(removeItem(item))
    //   alert("Item removed from cart successfully")
   }
   useEffect(()=>{
            const ind=cart.cartItems.findIndex((cartitem)=>cartitem.id==item.id)
            if(ind>=0){
                setAdded(true)
            }else{
                setAdded(false)
            }
    },[products.items,cart.cartItems,dispatch,item.id,cart])
   
    return(
        <>{
            
        
       !added?<Button variant="warning" style={{width:"100%",fontWeight:"750"}} onClick={(e)=>{add(e,item)}}>Add to cart</Button>
                :<Button variant="warning" style={{width:"100%",fontWeight:"750",color:"red",backgroundColor:"pink",border:"none"}} onClick={(e)=>{remove(e,item)}}>Remove from cart</Button>
        } 
                </>
    )
}