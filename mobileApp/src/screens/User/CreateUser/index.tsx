import React from "react";
import MainContainer from "../../../components/common/MainContainer";

import Text from "../../../components/common/Text";
import { Input, LineContainer, TextContainer, FormContainer } from "./styles";

const CreateUser: React.FC = () => {
  return (
    <MainContainer>
      <TextContainer>
        <Text
          text="Por favor, preencha as informações abaixo para cadastrar um novo usuário "
          type="medium"
          color="#212121"
          size={14}
        />
      </TextContainer>
      <FormContainer>
        <LineContainer>
          <Text text="Nome: " type="medium" color="#212121" />
          <Input />
        </LineContainer>
        <LineContainer>
          <Text text="E-mail: " type="medium" color="#212121" />
          <Input />
        </LineContainer>
      </FormContainer>
    </MainContainer>
  );
};

export default CreateUser;
