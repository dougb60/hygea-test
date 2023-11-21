import React from "react";

import { Button } from "./styles";
import Text from "../../Text";

type ActionProps = {
  onPress: () => void;
  text: string;
  type: "danger" | "warning";
};

const Action: React.FC<ActionProps> = ({ onPress, text, type }) => {
  return (
    <Button onPress={() => onPress && onPress()} type={type}>
      <Text text={text} type="bold" color="#ffffff" />
    </Button>
  );
};

export default Action;
