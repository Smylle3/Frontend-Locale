import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export default function NavBar(props) {
  async function logout() {
    await AsyncStorage.clear();
    props.navigation.navigate("Login");
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
