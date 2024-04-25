import React from "react";
import "./AllFruitsVegetables/Styles.css";
import img1 from "../Assests/Deals/t2_hp_aff_m_amex_180424.webp";
import img2 from "../Assests/Deals/t2_hp_aff_m_auapr_180424.webp";
import img3 from "../Assests/Deals/t2_hp_aff_m_indus20_180424.webp";
import img4 from "../Assests/Deals/t2_hp_aff_m_sbi-cc_180424.webp";
import { useEffect, useState } from "react";
import { Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../Context/Context";
import { Card, Button } from "react-bootstrap";
function DealCard() {
  return (
    <div style={{ margin: "4rem" }}>
      <h2>Bank Offers</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div class="card" style={{ width: "fit-content" }}>
          <img class="card-img-top" src={img1} alt="Card image cap" />
          <div class="card-body">
            <p
              class="card-text"
              style={{
                textAlign: "center",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Terms and Conditions
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "fit-content" }}>
          <img class="card-img-top" src={img2} alt="Card image cap" />
          <div class="card-body">
            <p
              class="card-text"
              style={{
                textAlign: "center",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Terms and Conditions
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "fit-content" }}>
          <img class="card-img-top" src={img3} alt="Card image cap" />
          <div class="card-body">
            <p
              class="card-text"
              style={{
                textAlign: "center",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Terms and Conditions
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "fit-content" }}>
          <img class="card-img-top" src={img4} alt="Card image cap" />
          <div class="card-body">
            <p
              class="card-text"
              style={{
                textAlign: "center",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealCard;
