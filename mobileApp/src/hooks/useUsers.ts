import { User } from "@/src/types/Users";
import { useState } from "react";
import { createUser, getAll, getByFilter, deleteById } from "../services/User";
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

  const getUserByFilter = async (filter: string) => {
    if (filter.length > 3) {
      const filteredUsers = await getByFilter(filter);

      setUsers(filteredUsers);
      return;
    }
    getAllUsers();
  };

  const deleteUserById = async (id: string) => {
    deleteById(id);
  };

  return { getAllUsers, users, createNewUser, getUserByFilter, deleteUserById };
}

export default useUsers;
