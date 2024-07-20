import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { FaShoppingCart } from "react-icons/fa";

import "@fontsource/baloo-2";

export const Nav = styled.nav`
  height: 150px;
  background: #8bc0c6;
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

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 80px;
    right: 0;
    background: #8bc0c6;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

export const MobileMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;

  &:hover {
    background: #b3e1e1;
    transition: all 0.3s ease;
  }
`;
