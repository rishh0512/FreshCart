import { useEffect, useState } from "react";
import { Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../../Context/Context";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

function SingleProduct({ product }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const navigate = useNavigate();
  function openProductDetails(id) {
    navigate(`/allProducts/${id}`);
  }
  return (
    <div className="Product-Tile">
      <Card>
        <div style={{ padding: "1rem" }}>
          <Card.Img
            variant="top"
            src={product.img}
            alt={product.label}
            style={{ border: "0.8px solid green" }}
          />
          <Card.Body>
            <Card.Title onClick={() => openProductDetails(product.id)} style={{cursor:'pointer'}}>
              {product.label}
            </Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span>₹{product.price}</span>
            </Card.Subtitle>
            <Form.Control
              as="select"
              value={product.qty}
              onChange={(e) =>
                dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: {
                    id: product.id,
                    qty: e.target.value,
                  },
                })
              }
            >
              {[...Array(product.quantity).keys()].map((x) => (
                <option key={x + 1}>{x + 1}</option>
              ))}
            </Form.Control>

            {cart.some((p) => p.id === product.id) ? (
              <Button
                style={{ width: "100%", marginTop: "1rem" }}
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  backgroundColor: "var(--text-color",
                }}
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  })
                }
                disabled={!product.inStock}
              >
                {!product.inStock ? "Out of Stock" : "Add to Cart"}
              </Button>
            )}
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default SingleProduct;
