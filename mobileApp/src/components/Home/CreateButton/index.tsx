import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { CircleButton } from "./styles";

type ButtonProps = {
  onPress: () => void;
};

const CreateButton: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <CircleButton onPress={onPress}>
      <AntDesign name="adduser" size={24} color="#fafafa" />
    </CircleButton>
  );
};

export default CreateButton;
