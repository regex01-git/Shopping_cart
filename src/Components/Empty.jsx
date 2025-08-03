// EmptyCart.js
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
 // use a nice illustration

const Empty = () => (
  <div style={{ textAlign: "center", padding: "4rem" }}>
    {/* <img src={cartImg} alt="Empty cart" style={{ width: "150px", marginBottom: "1.5rem" }} /> */}
    <h3>Your cart is empty</h3>
    <p>Add items to your cart to see them listed here.</p>
    <Button as={Link} to="/" variant="primary" style={{ marginTop: "1rem" }}>
      Start Shopping
    </Button>
  </div>
);

export default Empty;
