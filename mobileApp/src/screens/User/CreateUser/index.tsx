import React, { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Submit from "../../../components/common/Buttons/Submit";
import MainContainer from "../../../components/common/MainContainer";
import Text from "../../../components/common/Text";
import useUsers from "../../../hooks/useUsers";
import { RootStackParamList } from "../../../types/navigation";
import {
  AddressContainer,
  ButtonContainer,
  FormContainer,
  Input,
  LineContainer,
  TextContainer,
} from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";

export type FormProps = {
  name: string;
  email: string;
  birthdate: string;
  street: string;
  number: string;
  address_details?: string;
  id?: number | string;
};

const CreateUser: React.FC = () => {
  const { createUpdateUser } = useUsers();
  const { params } = useRoute<RouteProp<RootStackParamList>>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const props = params?.user;

  const text = useMemo(() => {
    if (props && props.id) {
      return "Altere os campos abaixo para atualizar as informações do usuário";
    }

    return "Por favor, preencha as informações abaixo para cadastrar um novo usuário ";
  }, [props]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: props?.name ?? "",
      email: props?.email ?? "",
      birthdate: props?.birthdate ?? "",
      street: props?.address ?? "",
      number: "",
      address_details: "",
    },
  });
  const onSubmit = (data: FormProps) => {
    createUpdateUser({ ...data, id: props?.id ?? undefined });
    navigation.reset({ index: 0, routes: [{ name: "Home" }] });
  };

  return (
    <MainContainer>
      <TextContainer>
        <Text text={text} type="medium" color="#212121" size={14} />
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
          <Submit
            onPress={handleSubmit(onSubmit)}
            disabled={false}
            text={props && props.id ? "Atualizar" : "Enviar"}
          />
        </ButtonContainer>
      </FormContainer>
    </MainContainer>
  );
};

export default CreateUser;
