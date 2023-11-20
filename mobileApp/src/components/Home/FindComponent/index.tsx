import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import { TextInputProps } from "react-native";
import {
  Container,
  SearchIconContainer,
  SearchInputContainer,
  SearchTextInput,
} from "./styles";

const Search: React.FC<TextInputProps & { onClean: () => void }> = (props) => {
  return (
    <Container>
      <SearchInputContainer>
        <SearchTextInput placeholder="Busque por um usuário" {...props} />
      </SearchInputContainer>
      <SearchIconContainer>
        <MaterialIcons
          name="highlight-remove"
          size={24}
          color="black"
          onPress={props.onClean}
        />
      </SearchIconContainer>
    </Container>
  );
};

export default Search;
