import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";

import styles from "./styles";

export default function HomeScreen({ navigation }) {
  async function fastLogin() {
    let resData = await AsyncStorage.getItem("userData");
    if (resData !== null) {
      let compatible = await LocalAuthentication.hasHardwareAsync();
      if (compatible) {
        let biometricRecords = await LocalAuthentication.isEnrolledAsync();
        if (!biometricRecords) {
          alert("Biometria não cadastrada!");
        } else {
          let resultBio = await LocalAuthentication.authenticateAsync();
          if (resultBio.success) {
            navigation.navigate("Profile");
          } else {
          }
        }
      }
    } else {
      navigation.navigate("Login");
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {fastLogin()}}
        style={styles.button}
      >
        <Image
          source={require("../../../assets/img/loginButton.png")}
          style={styles.button}
        />
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Rastreio")}
        style={styles.button}
      >
        <Image
          source={require("../../../assets/img/rastreioButton.png")}
          style={styles.button}
        />
        <Text style={styles.text}>Rastrear</Text>
      </TouchableOpacity>
    </View>
  );
}
