import React, { useCallback, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  SearchIconContainer,
  SearchInputContainer,
  SearchTextInput,
} from "./styles";

const Search: React.FC = () => {
  const [inputText, setInputtext] = useState<string>("");
  const [buttonCollor, setButtonCollor] = useState<string>("black");

  const activeSearchButton = useCallback(
    (val: string) => {
      setInputtext(val);
      if (val.length > 0) {
        setButtonCollor("#7bdcb5");
        return;
      }
      setButtonCollor("black");
    },
    [inputText]
  );

  return (
    <Container>
      <SearchInputContainer>
        <SearchTextInput
          placeholder="Busque por um usuário"
          onChangeText={activeSearchButton}
        />
      </SearchInputContainer>
      <SearchIconContainer>
        <Ionicons
          name="ios-search-circle-outline"
          size={32}
          color={buttonCollor}
        />
      </SearchIconContainer>
    </Container>
  );
};

export default Search;
