import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #d3d3d3; // light gray background
  padding: 20px 0; // Adjust padding for height
  text-align: center;
  width: 100%;
  box-sizing: border-box; // Include padding in width calculation
`;

export const CopyrightText = styled.p`
  margin: 0;
  font-size: 16px; // Adjusted font size
  color: #333;
`;

export const ExtraText = styled.p`
  margin-top: 10px; // Space between copyright and extra text
  font-size: 14px;
  color: #666;
`;
