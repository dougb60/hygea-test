import React from "react";

import { Button } from "./styles";
import Text from "../../Text";

type ButtonProps = {
  onPress: () => void;
  disabled: boolean;
};

const Submit: React.FC<ButtonProps> = ({ onPress, disabled }) => {
  return (
    <Button onPress={() => onPress && onPress()} disabled={disabled}>
      <Text text="Enviar" type="bold" color="#ffffff" />
    </Button>
  );
};

export default Submit;
