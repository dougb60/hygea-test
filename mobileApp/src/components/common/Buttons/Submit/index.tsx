import React from "react";

import { Button } from "./styles";
import Text from "../../Text";

type ButtonProps = {
  onPress: () => void;
  disabled: boolean;
  text: string;
};

const Submit: React.FC<ButtonProps> = ({ onPress, disabled, text }) => {
  return (
    <Button onPress={() => onPress && onPress()} disabled={disabled}>
      <Text text={text} type="bold" color="#ffffff" />
    </Button>
  );
};

export default Submit;
