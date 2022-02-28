import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
        <Image source={require("../../../assets/img/loginButton.png")} style={styles.button}/>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Rastreio")} style={styles.button}>
        <Image source={require("../../../assets/img/rastreioButton.png")} style={styles.button}/>
        <Text style={styles.text}>Rastrear</Text>
      </TouchableOpacity>
    </View>
  );
}
