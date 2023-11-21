import { User } from "@/src/types/Users";
import api from "../../api";
import { routes } from "../../constants/routes";
import { AxiosResponse } from "axios";

export async function getAll() {
  const data = (await api.get<User[]>(routes.user.getAll)).data;

  return data;
}

export async function createUser({ address, birthdate, email, name }: User) {
  const created = await api.post<any, AxiosResponse, User>(routes.user.create, {
    address,
    birthdate,
    email,
    name,
  });

  return created.status;
}

export async function getByFilter(name: string) {
  const response = await api.get<User[]>(routes.user.filters, {
    params: { name },
  });

  const data = response.data;
  return data;
}

export async function deleteById(id: string) {
  const response = await api.delete(`${routes.user.delete}/${id}`);

  return response.status;
}

export async function updateUser({
  address,
  birthdate,
  email,
  name,
  id,
}: User) {
  const response = await api.put(routes.user.update, {
    address,
    birthdate,
    email,
    name,
    id,
  });

  return response.status;
}
