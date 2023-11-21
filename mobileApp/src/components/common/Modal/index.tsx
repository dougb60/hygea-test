import React from "react";
import { Modal as ModalComponent } from "react-native";
import {
  Container,
  TextContainer,
  ExitContainer,
  ContentTextContainer,
  ButtonContainer,
} from "./styles";
import Text from "../Text";
import ActionButton from "../Buttons/Action";
import { AntDesign } from "@expo/vector-icons";

type ModalProps = {
  closePress: () => void;
  visible: boolean;
  title: string;
  contentText: string;
  confirmButton: () => void;
};

const Modal: React.FC<ModalProps> = ({
  visible,
  closePress,
  title,
  confirmButton,
  contentText,
}) => {
  return (
    <ModalComponent visible={visible} animationType="slide" transparent>
      <Container>
        <ExitContainer>
          <AntDesign
            name="close"
            size={24}
            color="#fafafa"
            onPress={closePress}
          />
        </ExitContainer>
        <TextContainer>
          <Text text={title} type="bold" color="#fafafa" size={18} />
        </TextContainer>
        <ContentTextContainer>
          <Text text={contentText} type="medium" color="#fafafa" size={16} />
        </ContentTextContainer>
        <ButtonContainer>
          <ActionButton text="Excluir" type="danger" onPress={confirmButton} />
        </ButtonContainer>
      </Container>
    </ModalComponent>
  );
};

export default Modal;
