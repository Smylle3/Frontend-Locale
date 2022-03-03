import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, { useEffect, useState } from "react";
import { BackHandler, Alert } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { Profile, Edicao, Cadastro } from "../../bridge.js";
import styles from "./styles.js";

export default function AreaRestrita({ navigation }) {
  const Tab = createMaterialBottomTabNavigator();

  useEffect(() => {
    const backAction = () => {
      Alert.alert("", "Deseja fazer log-out da sua conta?", [
        {
          text: "Não",
          onPress: () => null,
          style: "não",
        },
        {
          text: "Sim",
          onPress: () => {
            AsyncStorage.clear();
            navigation.navigate("Home");
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      activeColor="#b2772c"
      inactiveColor="#ffe6c1"
      barStyle={styles.areaTab}
    >
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name="person" size={19} color="#b2772c" />,
        }}
      />
      <Tab.Screen
        name="Editar"
        component={Edicao}
        options={{
          tabBarIcon: () => <Icon name="create" size={20} color="#b2772c" />,
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Cadastro}
        options={{
          tabBarIcon: () => (
            <Icon name="add-circle" size={20} color="#b2772c" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
