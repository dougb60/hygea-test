import { User } from "@/src/types/Users";
import api from "../../api";
import { routes } from "../../constants/routes";

export async function getAll() {
  const data = (await api.get<User[]>(routes.user.getAll)).data;

  return data;
}
