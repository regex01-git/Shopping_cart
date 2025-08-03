import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Container,Row,Col} from 'react-bootstrap'
function ProductCard({product}) {
    const [dim,setDim]=useState([])
    useEffect(()=>{
        setDim(product.tags)
    },[product])
  return (
    <>
    
    {
        product?
        <Container>
            <Row>
                <Col xs={12}>
    <Card >
         <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.brand}</Card.Subtitle>
        <Card.Text><span style={{color:"white",backgroundColor:"green",borderRadius:"5px",padding:"2px 5px",marginRight:"3px"}}>Low Stock</span>
        <span style={{color:"white",backgroundColor:"navy",borderRadius:"5px",padding:"2px 7px",marginRight:"3px"}}>{product.category}</span></Card.Text>
        <Card.Text>
          {product.description}
        </Card.Text>
       <Card.Text><span style={{fontWeight:"700",fontSize:"20px"}}> ₹{product.price} </span>
        <span style={{textDecoration:"line-through",fontWeight:"650",color:"grey",fontSize:"14px",marginRight:"7px"}}> ₹{Math.round(product.price+product.discountPercentage/100*product.price)}</span>
        <span style={{color:"white",fontWeight:"5500",backgroundColor:"red",padding:"3px 5px",borderRadius:"5px"}}>{product.discountPercentage}% off</span></Card.Text>
      </Card.Body>
      <ListGroup variant="flush">

        <ListGroup.Item><span className='bold'>Rating: </span><img style={{width:"25px",height:"25px"}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO2ZS2sTURTHr28FRUSoC4ViMHPOxLYqRUVcuPEruNKFKPgV+gHEKoiCC4WCILhoaXzW+t50Ydvk3MRdVXBRF924sCAIvmrzl5m0SYa8JnHuZEbyh7OcM7//OfdO7rlRqquuujImCB9zQsVV0PwCws9VHIUsD0K4AM1ALnlExU3Q9NSFd4MmVZwEbR8qVb8U1mEVF0F4wgvPgPBjFQdBUgerq+8aKDj7QkVd0PSwCr5kgh6oKAti74fwcn0DXEDGGlBRFTSn68KXY1xFUcimUg2rX+7CMvLUr6ImCI35qP7qXhhVURIySdtX9Su7oLmvM7AziR7krOMQOgvhSyvr/pNv+HI4z6TdHE4uJ+dMoicYyDf9O4pnGToF4SEIj0B4GsJf2wBtNX5A07tiYegKNF+Atk9CJxPNwYWGoWkxBMg2gxYdxvoGPu7bBOEnnQflevESs3u2NO7CXGojND2KACw8IfQMU72b/e2B/OAGCN+P0NKZdFaHL/iSibRaB6G7nYfncaegLcF7TGi+08FlM4qpE+vbgi+ZgFoDoZsdWDa3AbX2n+A9JjTfCK/yPBIYvMeE0PUQDNxy3hUovMeI5osGK3/VGHjbJ0//G3YsFPiiAb5noAPpMA18MGDgfTjwznlJ01LwBmip5V/btq9NTG3ibPKAeQPaOmPuK0SnQzBAlw0aGDZvwOS8IDxh3oDmeZ9AC8Vx0I0Fn8/Mm4WfS22tee/p/Zp8cefoismpOCQ5Ruhzkw4UME3bzBnI20cbrN9v7hCeT2xvUoChhpcDOYN/hiBrn68B/ss9PWb6dvnOI7xz5cbhe40OnjNnoPI0KvTbndiy1t62880md7vHdOGfFQauBUtd+UKh1yt7II2MnQws71u71+2i5j/Q9CqovNUvcpeKuetxZKwB5x2m8nfV1f+ov0WA2bF0AkOGAAAAAElFTkSuQmCC" alt="filled-star--v1"/>
        {product.rating}</ListGroup.Item>
        <ListGroup.Item><span className='bold'>Stock: </span>{product.stock} items</ListGroup.Item>
        {
                product.dimensions?<ListGroup.Item><span className='bold'>Dimensions: </span>{product.dimensions.width}W * {product.dimensions.height}H * {product.dimensions.depth}D</ListGroup.Item>:null
        }
        
        <ListGroup.Item><span className='bold'>Weight: </span>{product.weight}</ListGroup.Item>
        <ListGroup.Item><span className='bold'>Shipping: </span>{product.shippingInformation}</ListGroup.Item>
        <ListGroup.Item><span className='bold'>Warrenty: </span>{product.warrantyInformation}</ListGroup.Item>
        <ListGroup.Item><span className='bold'>Return Policy: </span>{product.returnPolicy}</ListGroup.Item>
        <ListGroup.Item><span className='bold'>SKU: </span>{product.sku}</ListGroup.Item>
        {
          dim?<ListGroup.Item><span className='bold'>Tags: </span>{dim.map((item)=>(
            <span style={{padding:"4px 6px",borderRadius:"7px",backgroundColor:"gray",color:"white",marginLeft:"6px",fontWeight:"700"}}>{item}</span>
        ))}</ListGroup.Item>:null
        
    }
      </ListGroup>
      
    </Card>
    </Col>
    </Row>
    </Container>:null
}   
       
    </>
  );
}

export default ProductCard;