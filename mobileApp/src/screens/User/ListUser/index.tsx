import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import Text from "../../../components/common/Text";
import ActionButton from "../../../components/common/Buttons/Action";
import { RootStackParamList } from "../../../types/navigation";
import {
  Container,
  TitleContainer,
  SimpleContainer,
  ButtonContainer,
  PageTitleContainer,
} from "./styles";
import { calculateAge, formatDate } from "../../../utils";

const ListUser: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const params = route.params?.user;
  return (
    <>
      <PageTitleContainer>
        <Text
          text="Informações do usuário"
          type="medium"
          size={18}
          color="#212121"
        />
      </PageTitleContainer>
      <Container>
        <TitleContainer>
          <Text
            text={params?.name ?? ""}
            type="bold"
            size={18}
            color="#212121"
          />
        </TitleContainer>
        <SimpleContainer>
          <Text
            text={`Nascimento: ${formatDate(
              params?.birthdate ?? ""
            )} - ${calculateAge(params?.birthdate ?? "")} Anos`}
            type="medium"
            color="#212121"
            size={14}
          />
        </SimpleContainer>
        <SimpleContainer>
          <Text
            text={`Email: ${params?.email}`}
            type="medium"
            color="#212121"
            size={14}
          />
        </SimpleContainer>
        <SimpleContainer>
          <Text
            text={`Endereço: ${params?.address}`}
            type="medium"
            color="#212121"
            size={14}
          />
        </SimpleContainer>
      </Container>
      <ButtonContainer>
        <ActionButton text="Atualizar" type="warning" onPress={() => null} />
        <ActionButton text="Excluir" type="danger" onPress={() => null} />
      </ButtonContainer>
    </>
  );
};

export default ListUser;
