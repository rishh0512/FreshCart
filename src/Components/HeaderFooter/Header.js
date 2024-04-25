import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assests/Logo/FreshCartLogo.png";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import "./HeaderFooterStyles.css";
import { Badge, Button, Dropdown } from "react-bootstrap";
import { CartState } from "../../Context/Context";
import Categories from "./Categories";
import {
  MDBContainer,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";
function Header() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <div>
      <div className="container-fluid px-5 header ">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom border-dark">
          <div className="col-md-3 mb-2 menu-color mb-md-0">
            <Link
              to="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img src={Logo} alt="freshCart" />
            </Link>
          </div>
          

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2 menu-color ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allProducts" className="nav-link px-2 menu-color">
                Products
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="/allProducts" className="nav-link px-2 menu-color">
                Categories
              </NavLink> */}
<Categories/>
             
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu className="Cart-dropdown" style={{ minWidth: 370 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className="cartitem" key={prod.id}>
                        <img
                          src={prod.img}
                          className="cartItemImg"
                          alt={prod.label}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.label}</span>
                          <span>₹ {prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
