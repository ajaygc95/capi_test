import React from "react";
import { FooterContainer, CopyrightText, ExtraText } from "./Footer.element";

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>© 2024 Pixel. All rights reserved.</CopyrightText>
      <ExtraText>
        Thank you for visiting our website. We hope you find what you're looking
        for!
      </ExtraText>
    </FooterContainer>
  );
};

export default Footer;
