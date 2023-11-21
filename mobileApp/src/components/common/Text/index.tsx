import React, { ReactNode } from "react";
import { TextProps as RealTextProps } from "react-native";
import { TextLight, TextMedium, Textbold } from "./styles";

interface TextProps extends RealTextProps {
  text: string;
  size?: number;
  color?: string;
  type: "light" | "medium" | "bold";
}

const Text: React.FC<TextProps> = ({
  text,
  color,
  size,
  type,
  numberOfLines,
}) => {
  const TextMap: Record<string, ReactNode> = {
    light: (
      <TextLight size={size} color={color} numberOfLines={numberOfLines}>
        {text}
      </TextLight>
    ),
    medium: (
      <TextMedium size={size} color={color} numberOfLines={numberOfLines}>
        {text}
      </TextMedium>
    ),
    bold: (
      <Textbold size={size} color={color} numberOfLines={numberOfLines}>
        {text}
      </Textbold>
    ),
  };

  return TextMap[type];
};

export default Text;
