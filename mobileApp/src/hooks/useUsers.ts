import { User } from "@/src/types/Users";
import { useState } from "react";
import { getAll } from "../services/User";

function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  const getAllUsers = async () => {
    const users = await getAll();

    setUsers(users);
  };

  return { getAllUsers, users };
}

export default useUsers;
