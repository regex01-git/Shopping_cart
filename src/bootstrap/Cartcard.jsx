import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { removeItem } from '../features/Cart';
import { useDispatch } from 'react-redux';
function Cardcard({item}) {
    const dispatch=useDispatch()
    function remove(item){
        dispatch(removeItem(item))
    }
  return (
    <>
   
    <Card style={{  }} className='mb-4 ms-3 mt-3'>
         <Row> 
    <Col  xs={10} lg={10}>
  <Card.Body className="d-flex align-items-center">
    <Card.Img
      src={item.thumbnail}
      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
      className="me-3"
    />
    <div position="absolute">
      <Card.Title style={{ marginBottom: 0 }}>{item.title}</Card.Title>
      
      <Card.Text>{item.brand}</Card.Text>
      <Card.Text><span style={{fontWeight:"700",fontSize:"20px",color:"red"}}> ₹{item.price} </span>
      <span style={{color:"black",fontWeight:"650",backgroundColor:"gold",padding:"3px 5px",borderRadius:"5px"}}>{item.discountPercentage}% off</span></Card.Text>
      <Card.Text>In stock</Card.Text>
    </div>
  </Card.Body>
  </Col>
  <Col xs={2} lg={2} className="d-flex align-items-center justify-content-center">
  <svg  onClick={()=>{remove(item)}}xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>

  </Col>
  </Row>
  </Card>
  
 


</>
  );
}

export default Cardcard;