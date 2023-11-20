import React from "react";
import { calculateAge, formatDate } from "../../../utils";

import {
  Container,
  NameContainer,
  BirthContainer,
  MailContainer,
  AddressContainer,
} from "./styles";
import Divider from "../../common/Divider";
import { User } from "../../../types/Users";
import Text from "../../common/Text";

const UserCard: React.FC<User> = ({ birthdate, email, address, name }) => {
  const formattedDate = formatDate(birthdate);

  return (
    <Container>
      <NameContainer>
        <Text text={name} type="bold" color="#212121" />
      </NameContainer>
      <Divider />
      <BirthContainer>
        <Text
          text={`${formattedDate} - ${calculateAge(birthdate)} anos`}
          type="medium"
          color="#212121"
        />
      </BirthContainer>
      <MailContainer>
        <Text text={`Email: ${email}`} type="medium" color="#212121" />
      </MailContainer>
      <AddressContainer>
        <Text text={`Endereço: ${address}`} type="medium" color="#212121" />
      </AddressContainer>
    </Container>
  );
};

export default UserCard;
