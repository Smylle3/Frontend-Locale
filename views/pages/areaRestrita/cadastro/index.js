import React from "react";
import { View, Text } from "react-native";
import NavBar from "../../../components/navbar";
import styles from "./styles";

export default function Cadastro({ navigation }) {
  return (
    <View style={[styles.container, styles.top]}>
      <NavBar title="Cadastrar encomenda" navigation={navigation} />
      <Text>Cadastro Page</Text>
    </View>
  );
}
