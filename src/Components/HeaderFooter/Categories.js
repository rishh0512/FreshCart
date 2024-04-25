import React from "react";
import "./categories.css";
import { Link, NavLink } from "react-router-dom";
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
import { CartState } from "../../Context/Context";
function Categories() {
  return (
    <div>
      <NavLink>
        <MDBDropdown className="nav-link px-2 menu-color">
          <MDBDropdownToggle tag="a" style={{color:'rgb(37, 99, 37)'}}>Categories </MDBDropdownToggle>
          <MDBDropdownMenu className="categories-container">
            <div className="categories-dropdown">
              <div style={{padding:"1rem"}}>
              <NavLink to='fruitsVegetables' style={{all:'unset'}}><p>Fresh Fruits and Vegetables</p></NavLink>
              <hr />
             <ul>
              <NavLink to='fruits'><li>Fresh Fruits</li></NavLink>
              <NavLink to='vegetables'><li>Fresh Vegetables</li></NavLink>
              <NavLink to='herbs-seasonings'><li>Herbs & Seasonings</li></NavLink>
             </ul>
              </div>
              <div style={{padding:"1rem"}}>
              <NavLink to='beverages' style={{all:'unset'}}><p>Beverages</p></NavLink>
              <hr />
             <ul>
              <NavLink to='cold-drinks' ><li>Cold Drinks</li></NavLink>
              <NavLink to='cold-coffee'><li>Cold Coffee</li></NavLink>
              <NavLink to='energy-health'><li>Energy and Health Drinks</li></NavLink>
             </ul>
              </div>

              <div style={{padding:"1rem"}}>
              <NavLink to='snakes' style={{all:'unset'}}><p>Snakes & Branded Foods</p></NavLink>
              <hr />
             <ul>
              <NavLink to='biscuits-cookies'><li>Biscuits & Cookies</li></NavLink>
              <NavLink to='breakfast-cereals'><li>Breakfast Cereals</li></NavLink>
              <NavLink to='chocolates-candies'><li>Chocolates & Candies</li></NavLink>
              <NavLink to='pickles-chutney'><li>Pickles & Chutney</li></NavLink>
             </ul>
              </div>

              <div style={{padding:"1rem"}}>
              <NavLink to='babyCare' style={{all:'unset'}}><p>Baby Care</p></NavLink>
              <hr />
             <ul>
             <NavLink to='bath-hygiene'><li>Baby Bath & Hygiene</li></NavLink>
             <NavLink to='food-formula'><li>Baby Food & Formula</li></NavLink>
             <NavLink to='diapers-wipes'><li>Diapers & Wipes</li></NavLink>
             <NavLink to='mothers-maternity'><li>Mothers & Maternity</li></NavLink>
             </ul>
              </div>
              <div style={{padding:"1rem"}}>
              <NavLink to='householdCleaners' style={{all:'unset'}}><p>Cleaning & Household</p></NavLink>
              <hr />
             <ul>
             <NavLink to='freshners-repellents'><li>Freshners & Repellents</li></NavLink>
             <NavLink to='detergents-dishwash'><li>Detergents & Dishwash</li></NavLink>
             <NavLink to='disposables'><li>Disposables, Garbage Bag</li></NavLink>
             <NavLink to='mops-brushes'><li>Mops, Brushes & Scrubs</li></NavLink>
             </ul>
              </div>
            </div>
          </MDBDropdownMenu>
        </MDBDropdown>
      </NavLink>
    </div>
  );
}

export default Categories;
