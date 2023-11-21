import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import ActionButton from "../../../components/common/Buttons/Action";
import Modal from "../../../components/common/Modal";
import Text from "../../../components/common/Text";
import useUsers from "../../../hooks/useUsers";
import { RootStackParamList } from "../../../types/navigation";
import { calculateAge, formatDate } from "../../../utils";
import {
  ButtonContainer,
  Container,
  PageTitleContainer,
  SimpleContainer,
  TitleContainer,
} from "./styles";

const ListUser: React.FC = () => {
  const { deleteUserById } = useUsers();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const route = useRoute<RouteProp<RootStackParamList>>();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "ListUser">>();
  const params = route.params?.user;

  const handleDelete = async () => {
    setModalVisible(false);
    deleteUserById(params?.id?.toString() ?? "0");
    navigation.push("Home");
  };

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
        <ActionButton
          text="Excluir"
          type="danger"
          onPress={() => setModalVisible(true)}
        />
      </ButtonContainer>
      <Modal
        title="Atenção!"
        contentText="Esta ação removerá este usuário de nossa base definitivamente! Tem certeza que deseja continuar?"
        confirmButton={handleDelete}
        visible={modalVisible}
        closePress={() => {
          setModalVisible(false);
        }}
      />
    </>
  );
};

export default ListUser;
