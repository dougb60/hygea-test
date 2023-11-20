import { FlatList, ListRenderItem } from "react-native";
import Search from "../../components/Home/FindComponent";
import MainContainer from "../../components/common/MainContainer";
import UserCard from "../../components/Home/UserCard";
import CreateButton from "../../components/Home/CreateButton";
import React, { useCallback, useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import { User } from "@/src/types/Users";

const Home: React.FC = () => {
  const { getAllUsers, users } = useUsers();

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
      <Search />
      <FlatList
        data={users}
        renderItem={renderItem}
        contentContainerStyle={{ marginTop: 18 }}
        keyExtractor={({ id }) => id?.toString()}
        windowSize={4}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      />
      <CreateButton />
    </MainContainer>
  );
};

export default Home;
