import { Platform } from "react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  min-height: 32px;
  background-color: #fafafa;
  border: 1px solid #26a69a;
  border-radius: 10px;
  padding: 12px 8px;
  margin-bottom: 12px;

  ${Platform.OS === "android"
    ? `
      elevation: 5; 
    `
    : `
      shadow-color: #000;
      shadow-offset: 0px 4px;
      shadow-opacity: 0.2;
      shadow-radius: 4px;
    `}
`;

export const NameContainer = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const BirthContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 12px 0;
`;

export const MailContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const AddressContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin: 12px 0;
`;
