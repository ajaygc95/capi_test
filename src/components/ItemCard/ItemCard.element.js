import styled from "styled-components";
import { Button } from "../../globalStyles";

// Horizontal Divider with Pink Circles and PIXEL Text
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
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  background-color: #8bc0c6; /* Color of the circles */
  border-radius: 50%;
`;

export const LeftCircleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Gap between each circle */
  margin-right: 10px; /* Space between circles and PIXEL text */
`;

export const RightCircleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Gap between each circle */
  margin-left: 10px; /* Space between circles and PIXEL text */
`;

export const DividerText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333; /* Text color */
  white-space: nowrap; /* Prevent text from wrapping */
`;

// Container for items
export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: auto;
  max-width: 1500px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px; /* Add padding on smaller screens */
  }
`;

export const ItemContainer = styled.div`
  flex: 0 0 calc((100% - 40px) / 2); /* Show 2 items per row */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px 20px 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 400px; /* Set max-width to 400px */
  height: 550px; /* Increased height to fit title and price */

  @media (max-width: 768px) {
    flex: 0 0 100%; /* Take full width on mobile */
    max-width: 100%; /* Full width on mobile */
    height: auto; /* Auto height for flexibility */
  }
`;

export const ItemImage = styled.img`
  width: 100%; /* Ensure image takes 100% of the container width */
  object-fit: cover; /* Ensure the image covers the container area */
  margin: 0; /* Remove any margin */
  padding: 0; /* Remove any padding */
`;

export const ItemDetails = styled.div`
  width: 100%;
  height: 40%; /* Remaining height for details section */
  text-align: center;
  padding: 10px; /* Space around text */
  background-color: #fef6e4; /* Match background color of item card */
  box-sizing: border-box;
`;

export const ItemPrice = styled.p`
  font-size: 18px;
  margin: 5px 0; /* Adjust margin for spacing */
  color: #333;
  text-align: center;
  text-decoration: none; /* Remove underline */
`;

export const ItemDescription = styled.p`
  font-size: 16px;
  margin: 5px 0; /* Adjust margin for spacing */
  color: #555;
  text-align: center;
  text-decoration: none; /* Remove underline */
`;

export const AddToCartButton = styled(Button)`
  background-color: teal;
  border-radius: 0;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  transition: background-color 0.3s ease;
  margin-top: 10px; /* Adds some space between button and description */

  &:hover {
    background-color: #004d40;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const GoToCartButton = styled(Button)`
  border-radius: 0;
  font-size: 1.3rem;
  padding: 20px;
  margin-top: 20px;
  background-color: teal;
  color: #fff;

  &:hover {
    background-color: #004d40;
  }
`;
