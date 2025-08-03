import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import Buttonclick from '../bootstrap/Button';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { checkItem } from '../features/Products';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

function ProductCard({item}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const cart=useSelector((store=>store.cart))
  const home=useSelector((store=>store.products))
   
    //  useEffect(() =>  console.log("Item in product card",item.cartQuantity))
    
  return (
   <>
    
    <Card style={{ width: '20rem',cursor:"pointer" }} onClick={()=>{ navigate(`/product-details/${item.id}`)}}>
      <img variant="top" loading="lazy" src={item.thumbnail} />
      
      <Card.Body>
        <Card.Title className="webkit-line-clamp">{item.title} | {item.description}</Card.Title>
        <Card.Text style={{marginBottom:"0px"}}>
          <img style={{width:"25px",height:"25px"}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO2ZS2sTURTHr28FRUSoC4ViMHPOxLYqRUVcuPEruNKFKPgV+gHEKoiCC4WCILhoaXzW+t50Ydvk3MRdVXBRF924sCAIvmrzl5m0SYa8JnHuZEbyh7OcM7//OfdO7rlRqquuujImCB9zQsVV0PwCws9VHIUsD0K4AM1ALnlExU3Q9NSFd4MmVZwEbR8qVb8U1mEVF0F4wgvPgPBjFQdBUgerq+8aKDj7QkVd0PSwCr5kgh6oKAti74fwcn0DXEDGGlBRFTSn68KXY1xFUcimUg2rX+7CMvLUr6ImCI35qP7qXhhVURIySdtX9Su7oLmvM7AziR7krOMQOgvhSyvr/pNv+HI4z6TdHE4uJ+dMoicYyDf9O4pnGToF4SEIj0B4GsJf2wBtNX5A07tiYegKNF+Atk9CJxPNwYWGoWkxBMg2gxYdxvoGPu7bBOEnnQflevESs3u2NO7CXGojND2KACw8IfQMU72b/e2B/OAGCN+P0NKZdFaHL/iSibRaB6G7nYfncaegLcF7TGi+08FlM4qpE+vbgi+ZgFoDoZsdWDa3AbX2n+A9JjTfCK/yPBIYvMeE0PUQDNxy3hUovMeI5osGK3/VGHjbJ0//G3YsFPiiAb5noAPpMA18MGDgfTjwznlJ01LwBmip5V/btq9NTG3ibPKAeQPaOmPuK0SnQzBAlw0aGDZvwOS8IDxh3oDmeZ9AC8Vx0I0Fn8/Mm4WfS22tee/p/Zp8cefoismpOCQ5Ruhzkw4UME3bzBnI20cbrN9v7hCeT2xvUoChhpcDOYN/hiBrn68B/ss9PWb6dvnOI7xz5cbhe40OnjNnoPI0KvTbndiy1t62880md7vHdOGfFQauBUtd+UKh1yt7II2MnQws71u71+2i5j/Q9CqovNUvcpeKuetxZKwB5x2m8nfV1f+ov0WA2bF0AkOGAAAAAElFTkSuQmCC" alt="filled-star--v1"/>
           <span style={{color:"rgb(255, 215, 0)",fontSize:'15px'}}> {item.rating}</span> 
        </Card.Text>
        <Card.Text><span style={{fontWeight:"700",fontSize:"20px"}}> ₹{item.price} </span>
        <span style={{textDecoration:"line-through",fontWeight:"650",color:"grey",fontSize:"14px",marginRight:"7px"}}> ₹{Math.round(item.price+item.discountPercentage/100*item.price)}</span>
        <span style={{color:"green",fontWeight:"650"}}>({item.discountPercentage})% off</span>
        </Card.Text>
        <Card.Text>
          <span style={{fontWeight:"600"}}>FREE {item.shippingInformation}</span>
        </Card.Text>
        <Card.Text>
          
          <Buttonclick item={item}/>
          
        </Card.Text>
       </Card.Body>
      
    </Card>
     
    </>
  );
}

export default ProductCard;