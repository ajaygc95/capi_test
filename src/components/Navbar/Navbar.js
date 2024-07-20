// src/components/Navbar/Navbar.js
import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { CartContext } from "../CartContext";
import {
  Nav,
  NavbarContainer,
  NavLogoContainer,
  NavLogo,
  MobileIcon,
  CartIconBadge,
  CartIconContainer,
  CartIcon,
  NavLinks,
  LogoImage,
} from "./Navbar.elements";
import logoImage from "../../images/shihtzu.png"; // Ensure you have a logo image in the specified path

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { cart, getTotalCount } = useContext(CartContext);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogoContainer>
              <NavLogo to="/" onClick={closeMobileMenu}>
                Pixel
              </NavLogo>
              <LogoImage src={logoImage} alt="Logo" />
            </NavLogoContainer>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavLinks to="/cart" onClick={closeMobileMenu}>
              <CartIconContainer>
                <CartIcon />
                {getTotalCount() > 0 && (
                  <CartIconBadge>{getTotalCount()}</CartIconBadge>
                )}
              </CartIconContainer>
            </NavLinks>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
