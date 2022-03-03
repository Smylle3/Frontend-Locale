import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginPage, Rastreio } from "./views/bridge";
import { AreaRestrita } from "./views/bridge";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "LOCALE",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#ffab40",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
            title: "LOGIN",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#ffab40",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Rastreio"
          component={Rastreio}
          options={{
            title: "RASTREAR",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#ffab40",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={AreaRestrita}
          options={{
            title: "RASTREAR",
            headerTitleAlign: "center",
            headerShown: false,
            headerStyle: {
              backgroundColor: "#ffab40",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
