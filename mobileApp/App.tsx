import {
  Barlow_300Light,
  Barlow_400Regular,
  Barlow_600SemiBold,
  useFonts,
} from "@expo-google-fonts/barlow";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./src/screens/Home";
import { CreateUser } from "./src/screens/User";
import { RootStackParamList } from "./src/types/navigation";
import { StatusBar } from "expo-status-bar";
import ListUser from "./src/screens/User/ListUser";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Barlow_300Light,
    Barlow_400Regular,
    Barlow_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#173557" },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontFamily: "Barlow_600SemiBold",
              fontSize: 20,
              fontWeight: "600",
            },
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Grupo Hygea" }}
          />
          <Stack.Screen
            name="CreateUser"
            component={CreateUser}
            initialParams={undefined}
            options={{ title: "Novo Usuário" }}
          />
          <Stack.Screen
            name="ListUser"
            component={ListUser}
            initialParams={undefined}
            options={{ title: "Usuário" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
