import React from "react";
import { image1 } from "../Assests/FruitsVegetablesImages/AppleShimlaEconomy.webp";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../Context/Context";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SelectedProdDetail from "./SelectedProdDetail";

function SingleProductDetails() {
  const paramsid = useParams();
  const id = paramsid.id;

  const {
    state: { FruitsVegetablesProduct },
  } = CartState();
  const selectedProduct = (product) => product.id === id;
  return (
    <div>
      {FruitsVegetablesProduct.filter(selectedProduct).map((product) => (
        <SelectedProdDetail product={product} key={product.id} />
      ))}
    </div>
  );
}

export default SingleProductDetails;
