import { User } from "@/src/types/Users";
import { useState } from "react";
import { createUser, getAll } from "../services/User";
import { FormProps } from "../screens/User/CreateUser";
import { formatAddress, formatStringToDate } from "../utils/";

function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  const getAllUsers = async () => {
    const users = await getAll();

    setUsers(users);
  };

  const createNewUser = ({
    birthdate,
    email,
    name,
    number,
    street,
    address_details,
  }: FormProps) => {
    const formattedAddress = formatAddress({
      street,
      number,
      details: address_details,
    });
    const formattedDate = formatStringToDate(birthdate);

    createUser({
      address: formattedAddress,
      birthdate: formattedDate,
      email,
      name,
    });
  };

  return { getAllUsers, users, createNewUser };
}

export default useUsers;
