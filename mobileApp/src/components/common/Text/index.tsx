import React, { ReactNode } from "react";
import { TextLight, TextMedium, Textbold } from "./styles";

type TextProps = {
  text: string;
  size?: number;
  color?: string;
  type: "light" | "medium" | "bold";
};

const Text: React.FC<TextProps> = ({ text, color, size, type }) => {
  const TextMap: Record<string, ReactNode> = {
    light: (
      <TextLight size={size} color={color}>
        {text}
      </TextLight>
    ),
    medium: (
      <TextMedium size={size} color={color}>
        {text}
      </TextMedium>
    ),
    bold: (
      <Textbold size={size} color={color}>
        {text}
      </Textbold>
    ),
  };

  return TextMap[type];
};

export default Text;
