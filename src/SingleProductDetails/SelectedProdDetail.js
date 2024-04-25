import React from "react";
import { CartState } from "../Context/Context";
import { Card, Button } from "react-bootstrap";
import { Col, Form, Image, ListGroup, Row } from "react-bootstrap";
function SelectedProdDetail({ product }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div>
      <section class="py-5">
        <div class="container">
          <div class="row gx-5">
            <aside class="col-lg-6">
              <div class="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  class="rounded-4"
                  target="_blank"
                  data-type="image"
                  href={product.img}
                >
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    class="rounded-4 fit"
                    src={product.img}
                  />
                </a>
              </div>
            </aside>
            <main class="col-lg-6">
              <div class="ps-lg-3">
                <h4 class="title text-dark">{product.label}</h4>
                <div class="mb-3">
                  <span class="h5">₹{product.price}</span>
                  <span class="text-muted">/per kg</span>
                </div>

                <hr />
                <div class="mb-3">
                  <span class="h5">{product.category}</span>
                  <br />
                  <span class="text-muted">{product.subcategory}</span>
                </div>
                <hr />
                <div class="mb-3">
                  <span class="h5" style={{ color: "red" }}>
                    {product.brand}
                  </span>
                  <br />
                </div>
                <div class="row mb-4">
                  <div class="col-md-4 col-6 mb-3">
                    <label class="mb-2 d-block">Quantity</label>
                    <div class="input-group mb-3" style={{ width: "170px" }}>
                    
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
                     
                    </div>
                  </div>
                </div>

                {cart.some((p) => p.id === product.id) ? (
                  <Button
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
              </div>
            </main>
          </div>
        </div>
      </section>

      <section class="bg-light border-top py-4">
        <div class="container">
          <div class="row gx-4">
            <div class="col-lg-8 mb-4">
              <div class="border rounded-2 px-3 py-2 bg-white">
                <div class="tab-content" id="ex1-content">
                  <div
                    class="tab-pane fade show active"
                    id="ex1-pills-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                  >
                    <h5>About</h5>
                    <p>{product.aboutProduct}</p>
                    <hr />
                    {product.benefits && (
                      <>
                        <h5>Benefits</h5>
                        <p>{product.benefits}</p>
                      </>
                    )}
                    {product.storageUses && (
                      <>
                        <h5>Storage and Usage</h5>
                        <p>{product.storageUses}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SelectedProdDetail;
