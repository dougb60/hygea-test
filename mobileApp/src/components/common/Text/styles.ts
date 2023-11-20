import { styled } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  color?: string;
  size?: number;
};

export const TextLight = styled.Text<Props>`
  font-family: "Barlow_300Light";
  font-size: ${({ size }) => (size ? RFValue(size) : RFValue(10))}px;
  color: ${({ color }) => color ?? "#9e9e9e"};
  font-weight: 300;
`;

export const TextMedium = styled.Text<Props>`
  font-family: "Barlow_400Regular";
  font-size: ${({ size }) => (size ? RFValue(size) : RFValue(12))}px;
  color: ${({ color }) => color ?? "#9e9e9e"};
  font-weight: 400;
`;

export const Textbold = styled.Text<Props>`
  font-family: "Barlow_600SemiBold";
  font-size: ${({ size }) => (size ? RFValue(size) : RFValue(14))}px;
  color: ${({ color }) => color ?? "#9e9e9e"};
  font-weight: 600;
`;
