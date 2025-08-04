import { useSelector } from "react-redux"
import Cartcard from "../bootstrap/Cartcard";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { total } from "../features/Cart";
import { NavLink } from "react-router";
import Empty from "./Empty";

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart);
    const [all,setAll]=useState([])
    // console.log("cart", cart.cartItems)
    useEffect(() => {
        dispatch(total());

    }, [cart.cartItems, dispatch, cart.totalCartAmount])


    useEffect(() => {
    const fetchByIds = async (items) => {
      try {
        const data = await Promise.all(
          items.map((item) =>
            fetch(`https://dummyjson.com/products/${item.id}`).then((res) => res.json())
          )
        );
        setAll(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (cart.cartItems.length > 0) {
      fetchByIds(cart.cartItems);
    //   console.log(all)
    }
  }, [cart]);
    return (
        <>
        {
            cart.cartItems&&console.log("fardeen",cart.cartItems)
        }
            {cart.cartItems.length != 0 ?
                <Container >
                    <Row >
                    <Col lg={8} >
                    <div className="mt-0" >
                        <h2 style={{ marginTop: "20px" }}>Shopping Cart</h2>
                        {
                            all && all.map((item) => (
                                <Col>
                                    <Cartcard key={item.id} item={item} />
                                </Col>
                            ))
                        }
                    </div>
                    </Col>
                   <Col lg={4}>
                    <div style={{ position: "sticky", top: "20px" }}  >
                        {/* <Col lg={3} className="sticky-col"> */}

                        <Card>
                            <Card.Body><span style={{ fontWeight: "700", fontSize: "20px" }}>Subtotal ({cart.cartItems && cart.cartItems.length} items): <span style={{ color: "green" }}>${cart.totalCartAmount && cart.totalCartAmount}</span> </span></Card.Body>
                            <Card.Body><Button variant="warning" style={{ width: "80%", height: "auto", fontWeight: "600" }}>Proceed to Checkout</Button></Card.Body>
                        </Card>

                        {/* </Col> */}
                    </div>
                   </Col>
                    </Row>
                </Container>
                : <Empty />
            }
        </>
    )
}