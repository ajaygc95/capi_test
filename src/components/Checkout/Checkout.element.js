import styled from "styled-components";
import { Button, Container } from "../../globalStyles";

export const MainContainer = styled(Container)`
  margin-top: 20px;
  width: 80%;
  max-width: 1500px;
`;

export const CheckoutTitle = styled.h1`
  text-align: center;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; // Ensure responsiveness
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const UserInformationBox = styled.div`
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const CardDetailsBox = styled(UserInformationBox)`
  margin-bottom: 20px; // Same styling as UserInformationBox
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  color: #666; // Gray color for labels
`;

export const FormInput = styled.input`
  height: 40px;
  border: none;
  padding: 10px;
  width: 100%;
  background-color: #e0e0e0;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 15px;
  font-size: 16px;

  &:focus {
    outline: none;
    background-color: #d0d0d0; // Slightly darker on focus
  }
`;

export const RighInfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const TotalContainer = styled.div`
  background-color: #f5f5f5; // Gray background for consistency
  padding: 20px;
  width: 100%; // Full width of RighInfoContainer
`;

export const TotalDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 18px;
  padding: 10px 0;
`;

export const TotalLabel = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: bold;
  color: #333; // Darker color for better contrast
`;

export const TotalValue = styled.p`
  font-size: 18px;
  margin: 0;
  color: #333; // Darker color for better contrast
`;

export const FormSubmitButton = styled(Button)`
  margin-top: 20px;
  padding: 15px;
  font-size: 1.2rem;
  width: 100%;
  background-color: #8bc0c6; // Match your app's button color
  color: white;
  text-align: center;
  border: none; // No border

  &:hover {
    background-color: #004d4d; // Match your app's hover color
  }
`;
