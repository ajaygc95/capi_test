// src/components/CircleDivider/CircleDivider.elements.js
import styled from "styled-components";

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 90%; /* Matches the width of the item card body */
  max-width: 1500px; /* Max width to match the item card body */
  height: 60px; /* Height of the divider */
  margin: 0 auto; /* Center the divider horizontally */
  margin-bottom: 20px; /* Space below the divider */
  position: relative;
  justify-content: center; /* Center the content horizontally */
  flex-wrap: wrap; /* Allow wrapping for responsiveness */

  @media (max-width: 768px) {
    display: none; /* Hide the entire divider on small screens */
  }
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  background-color: #8bc0c6; /* Color of the circles */
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 6px; /* Smaller circles on mobile */
    height: 6px;
  }
`;

export const LeftCircleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Gap between each circle */
  margin-right: 10px; /* Space between circles and PIXEL text */

  @media (max-width: 768px) {
    gap: 4px; /* Smaller gap on mobile */
    display: none; /* Hide circles on small screens */
  }
`;

export const RightCircleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Gap between each circle */
  margin-left: 10px; /* Space between circles and PIXEL text */

  @media (max-width: 768px) {
    gap: 4px; /* Smaller gap on mobile */
    display: none; /* Hide circles on small screens */
  }
`;

export const DividerText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333; /* Text color */
  white-space: nowrap; /* Prevent text from wrapping */

  @media (max-width: 768px) {
    font-size: 16px; /* Smaller text on mobile */
  }
`;
