import { styled } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  margin-top: ${RFValue(380)}px;
  opacity: 0.9;
`;

export const ExitContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const TextContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const ContentTextContainer = styled.View`
  margin-top: 42px;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  margin-top: ${RFValue(32)}px;
  justify-content: center;
  align-items: center;
`;
