import { useSelector } from "react-redux"
import Cartcard from "../bootstrap/Cartcard";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { total } from "../features/Cart";
import { NavLink } from "react-router";
import Empty from "./Empty";

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart);
    console.log("cart", cart.cartItems)
    useEffect(() => {
        dispatch(total());

    }, [cart.cartItems, dispatch, cart.totalCartAmount])

    return (
        <>
            {cart.cartItems.length != 0 ?
                <Container className='d-flex'>
                    <div className="mt-0" style={{ width: "80%" }}>
                        <h2 style={{ marginTop: "20px" }}>Shopping Cart</h2>
                        {
                            cart.cartItems && cart.cartItems.map((item) => (
                                 <Col lg={9}>
                                    <Cartcard key={item.id} item={item} />
                                 </Col> 
                            ))
                        }
                        </div>
                        <div style={{ width: "30%",position:"sticky",top:"20px" }}>
                        {/* <Col lg={3} className="sticky-col"> */}

                            <Card>
                                <Card.Body><span style={{ fontWeight: "700", fontSize: "20px" }}>Subtotal ({cart.cartItems && cart.cartItems.length} items): <span style={{ color: "green" }}>${cart.totalCartAmount && cart.totalCartAmount}</span> </span></Card.Body>
                                <Card.Body><Button variant="warning" style={{ width: "80%", height: "auto", fontWeight: "600" }}>Proceed to Checkout</Button></Card.Body>
                            </Card>

                        {/* </Col> */}
                    </div>
                </Container>
                : <Empty />
            }
        </>
    )
}