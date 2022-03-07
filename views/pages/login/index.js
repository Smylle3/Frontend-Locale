import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";

import config from "../../../app.json";
import styles from "./styles";
import ModalMy from "../../components/modal";
import InputMy from "../../components/input";

export default function LoginPage({ navigation }) {
  const [msgPass, setMsgPass] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  async function sendForm() {
    let response = await fetch(`${config.urlRoot}api/users/get-user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    });
    let jsonReturn = await response.json();

    setName(null);
    setPassword(null);
    if (jsonReturn === "falied") {
      setIsModal(true);
      setMsgPass("Usuário ou senha inválido!");
      await AsyncStorage.clear();
    } else {
      let userData = await AsyncStorage.setItem(
        "userData",
        JSON.stringify(jsonReturn)
      );
      navigation.navigate("Profile");
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ModalMy msgPass={msgPass} isModal={isModal} setIsModal={setIsModal} />
      <View style={styles.viewImage}>
        <Image
          style={styles.image}
          source={require("../../../assets/LogoMarca3.png")}
        />
      </View>
      <View style={styles.inputView}>
        <InputMy
          nameUser={name}
          setNameUser={setName}
          title="Usuário"
          isPassword="no"
        />
        <InputMy
          nameUser={password}
          setNameUser={setPassword}
          title="Senha"
          isPassword="yes"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            sendForm();
          }}
        >
          <Text>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonR}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text>Voltar para Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewButtonS}>
        <TouchableOpacity style={styles.buttonS}>
          <Text style={styles.buttonST}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonS}>
          <Text style={styles.buttonST}>Recuperar senha</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
