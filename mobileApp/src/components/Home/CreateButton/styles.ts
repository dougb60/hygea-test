import { Platform } from "react-native";
import { styled } from "styled-components/native";

export const CircleButton = styled.TouchableOpacity`
  height: 52px;
  width: 52px;
  border-radius: 50px;
  position: absolute;
  top: 85%;
  left: 85%;
  justify-content: center;
  align-items: center;
  background-color: #26a69a;
  ${Platform.OS === "android"
    ? `
      elevation: 5; 
    `
    : `
      shadow-color: #000;
      shadow-offset: 0px 6px;
      shadow-opacity: 0.2;
      shadow-radius: 4px;
    `}
`;
