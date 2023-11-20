import { User } from "@/src/types/Users";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import CreateButton from "../../components/Home/CreateButton";
import Search from "../../components/Home/FindComponent";
import UserCard from "../../components/Home/UserCard";
import MainContainer from "../../components/common/MainContainer";
import { useDebounce } from "../../hooks/useDebounce";
import useUsers from "../../hooks/useUsers";
import { RootStackParamList } from "../../types/navigation";
import { EmptyContainer } from "./styles";
import Text from "../../components/common/Text";

const Home: React.FC = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const debouncedValue = useDebounce<string>(searchVal, 800);
  const { getAllUsers, users, getUserByFilter } = useUsers();

  useEffect(() => {
    getUserByFilter(debouncedValue);
  }, [debouncedValue]);

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  useEffect(() => {
    getAllUsers();
  }, []);

  const renderItem: ListRenderItem<User> = useCallback(
    ({ item }) => {
      return <UserCard {...item} />;
    },
    [users]
  );

  return (
    <MainContainer>
      <Search
        onChangeText={setSearchVal}
        value={searchVal}
        onClean={() => setSearchVal("")}
      />
      <FlatList
        data={users}
        renderItem={renderItem}
        contentContainerStyle={{ marginTop: 18 }}
        keyExtractor={({ id, email }) => (id ? id?.toString() : email)}
        windowSize={4}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyContainer>
            <Text text="Nenhum usuário encontrado!" type="medium" />
          </EmptyContainer>
        }
      />
      <CreateButton onPress={() => navigation.push("CreateUser")} />
    </MainContainer>
  );
};

export default Home;
