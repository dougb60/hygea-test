import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";

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
import useUsers from "../../../hooks/useUsers";

export type FormProps = {
  name: string;
  email: string;
  birthdate: string;
  street: string;
  number: string;
  address_details?: string;
};

const CreateUser: React.FC = () => {
  const { createNewUser } = useUsers();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      birthdate: "",
      street: "",
      number: "",
      address_details: "",
    },
  });
  const onSubmit = (props: FormProps) => {
    createNewUser(props);
  };

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
            <Text text="Nome *" type="medium" color="#212121" />
            <Controller
              control={control}
              rules={{ required: "Campo Obrigatório" }}
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  placeholder="preencha o nome do usuário"
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                />
              )}
              name="name"
            />
            {errors.name && (
              <Text
                text={`${errors.name.message}`}
                type="light"
                color="red"
                size={8}
              />
            )}
          </LineContainer>
          <LineContainer>
            <Text text="E-mail *" type="medium" color="#212121" />
            <Controller
              control={control}
              rules={{ required: "Campo Obrigatório" }}
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  placeholder="preencha o email do usuário"
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text
                text={`${errors.email.message}`}
                type="light"
                color="red"
                size={8}
              />
            )}
          </LineContainer>
          <LineContainer>
            <Text text="Nascimento *" type="medium" color="#212121" />
            <Controller
              control={control}
              rules={{ required: "Campo Obrigatório" }}
              name="birthdate"
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInputMask
                  type="datetime"
                  placeholder="preencha a data de nascimento do usuário"
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  options={{ format: "DD/MM/YYYY" }}
                />
              )}
            />
            {errors.birthdate && (
              <Text
                text={`${errors.birthdate.message}`}
                type="light"
                color="red"
                size={8}
              />
            )}
          </LineContainer>
          <AddressContainer>
            <Text text="Endereço" type="bold" color="#212121" />
          </AddressContainer>
          <LineContainer>
            <Text text="Rua *" type="medium" color="#212121" />
            <Controller
              control={control}
              rules={{ required: "Campo Obrigatório" }}
              name="street"
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  placeholder="preencha o nome da rua"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.street && (
              <Text
                text={`${errors.street.message}`}
                type="light"
                color="red"
                size={8}
              />
            )}
          </LineContainer>
          <LineContainer>
            <Text text="Numero *" type="medium" color="#212121" />
            <Controller
              control={control}
              rules={{ required: "Campo Obrigatório" }}
              name="number"
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  keyboardType="number-pad"
                  placeholder="preencha o numero da rua"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.number && (
              <Text
                text={`${errors.number.message}`}
                type="light"
                color="red"
                size={8}
              />
            )}
          </LineContainer>
          <LineContainer>
            <Text text="Complemento" type="medium" color="#212121" />
            <Controller
              control={control}
              name="address_details"
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  placeholder="preencha o complemento do endereço"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </LineContainer>
        </KeyboardAwareScrollView>
        <ButtonContainer>
          <Submit onPress={handleSubmit(onSubmit)} disabled={false} />
        </ButtonContainer>
      </FormContainer>
    </MainContainer>
  );
};

export default CreateUser;
