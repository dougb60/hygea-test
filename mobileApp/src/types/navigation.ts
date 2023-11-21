import { User } from "./Users";

export type RootStackParamList = {
  Home: undefined;
  CreateUser: undefined;
  ListUser: { user: User };
  UpdateUser: { user: User };
};
