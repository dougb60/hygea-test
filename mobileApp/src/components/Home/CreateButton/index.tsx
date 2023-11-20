import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { CircleButton } from "./styles";

const CreateButton: React.FC = () => {
  return (
    <CircleButton>
      <AntDesign name="adduser" size={24} color="#fafafa" />
    </CircleButton>
  );
};

export default CreateButton;
