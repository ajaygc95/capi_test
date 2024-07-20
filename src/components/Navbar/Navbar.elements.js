import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { FaShoppingCart } from "react-icons/fa";

import "@fontsource/baloo-2";

export const Nav = styled.nav`
  height: 150px;
  background: #f8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${Container}
`;

export const NavLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const NavLogo = styled(Link)`
  color: #000;
  cursor: pointer;
  text-decoration: none;
  font-size: 5rem; 
  font-family: "Baloo 2", cursive; 
  margin-right: 0.5rem;
`;

export const LogoImage = styled.img`
  height: 50px; /* Adjust size as necessary */
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #000;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 2rem;
  color: #000 !important;
  margin-right: 1rem;
`;

export const CartIconBadge = styled.span`
  position: absolute;
  right: 0;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #ff69b4;
      transition: all 0.3s ease;
    }
  }
`;
