import { styled } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 48px;
  width: 100%;
  padding: 2px;

  border: 1px solid #26a69a;
  border-radius: 10px;
  background-color: #fafafa;
`;

export const SearchIconContainer = styled.View`
  width: 12%;
`;

export const SearchInputContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 12px;
`;

export const SearchTextInput = styled.TextInput``;
