import React from "react";
import MainContainer from "../../../components/common/MainContainer";
import Submit from "../../../components/common/Buttons/Submit";
import Text from "../../../components/common/Text";
import {
  Input,
  LineContainer,
  TextContainer,
  FormContainer,
  AddressContainer,
  ButtonContainer,
} from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
        <KeyboardAwareScrollView>
          <LineContainer>
            <Text text="Nome*" type="medium" color="#212121" />
            <Input placeholder="preencha o nome do usuário" />
          </LineContainer>
          <LineContainer>
            <Text text="E-mail*" type="medium" color="#212121" />
            <Input placeholder="preencha o email do usuário" />
          </LineContainer>
          <LineContainer>
            <Text text="Nascimento*" type="medium" color="#212121" />
            <Input placeholder="preencha a data de nascimento do usuário" />
          </LineContainer>
          <AddressContainer>
            <Text text="Endereço" type="bold" color="#212121" />
          </AddressContainer>
          <LineContainer>
            <Text text="Rua*" type="medium" color="#212121" />
            <Input placeholder="preencha o nome da rua" />
          </LineContainer>
          <LineContainer>
            <Text text="Numero*" type="medium" color="#212121" />
            <Input
              keyboardType="number-pad"
              placeholder="preencha o numero da rua"
            />
          </LineContainer>
          <LineContainer>
            <Text text="Complemento" type="medium" color="#212121" />
            <Input placeholder="preencha o complemento do endereço" />
          </LineContainer>
        </KeyboardAwareScrollView>
        <ButtonContainer>
          <Submit onPress={() => console.log("oi")} disabled={true} />
        </ButtonContainer>
      </FormContainer>
    </MainContainer>
  );
};

export default CreateUser;
