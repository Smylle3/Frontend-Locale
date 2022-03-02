import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem("userData");
      let jsonUser = JSON.parse(response);
      setUser(jsonUser.name);
    }
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Olá, {user}!</Text>
    </View>
  );
}
