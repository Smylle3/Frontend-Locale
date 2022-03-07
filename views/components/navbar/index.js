import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export default function NavBar(props) {
  async function logout() {
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
          props.navigation.navigate("Login");
        },
      },
    ]);
    await AsyncStorage.clear();
  }
  return (
    <View style={styles.title}>
      <TouchableOpacity
        style={styles.buttonHome}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Icon name="home" color="#b2772c" size={20} />
      </TouchableOpacity>
      <Text style={styles.textTitle}>{props.title}</Text>
      <TouchableOpacity style={styles.buttonLogout} onPress={() => logout()}>
        <Icon name="log-out" color="#b2772c" size={20} />
      </TouchableOpacity>
    </View>
  );
}
