import { styled } from "styled-components/native";

type Props = {
  disabled: boolean;
};

export const Button = styled.TouchableOpacity<Props>`
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 40%;
  border-radius: 10px;

  background-color: ${({ disabled }) => (disabled ? "#bdbdbd" : "#00695c")};
`;
