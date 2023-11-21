import { styled } from "styled-components/native";

type Props = { type: "danger" | "warning" };

export const Button = styled.TouchableOpacity<Props>`
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 40%;
  border-radius: 10px;

  background-color: ${({ type }) =>
    type === "danger" ? "#FF5252" : "#FBC02D"};
`;
