import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Barlow_300Light,
  Barlow_400Regular,
  Barlow_600SemiBold,
} from "@expo-google-fonts/barlow";
import { RootStackParamList } from "./src/types/Routes";
import Home from "./src/screens/Home";

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
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            title: "Grupo Hygea",
            headerStyle: { backgroundColor: "#173557" },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontFamily: "Barlow_600SemiBold",
              fontSize: 20,
              fontWeight: "600",
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
