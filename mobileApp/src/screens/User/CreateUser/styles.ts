import { styled } from "styled-components/native";

export const TextContainer = styled.View`
  margin: 16px 0;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const FormContainer = styled.ScrollView`
  background-color: #fafafa;
  padding: 8px 0;
`;

export const LineContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 16px;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  background-color: #eeeeee;
  width: 100%;
  padding: 6px 4px;
  height: 32px;
`;

export const AddressContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 8px;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 48px;
`;
