import { styled } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px 16px;
  margin-top: ${RFPercentage(10)}px;
  background-color: #fafafa;
`;

export const PageTitleContainer = styled.View`
  margin-top: ${RFPercentage(2)}px;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  padding: 16px;
`;

export const SimpleContainer = styled.View`
  flex-direction: row;
  padding: 16px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 8px;
  margin-top: ${RFPercentage(26)}px;
`;
