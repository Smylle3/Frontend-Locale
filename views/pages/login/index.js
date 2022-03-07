import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from "react-native";

import PassView from "../../components/passView/passView";
import config from "../../../app.json";
import styles from "./styles";

export default function LoginPage({ navigation }) {
  const [alert, setAlert] = useState("none");
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPass, setShowPass] = useState(true);

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
      setAlert("flex");
      setTimeout(() => {
        setAlert("none");
      }, 5000);
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
      <View style={styles.viewImage}>
        <Image
          style={styles.image}
          source={require("../../../assets/LogoMarca3.png")}
        />
      </View>

      <View>
        <Text style={styles.alertMsgTxt(alert)}>
          Usuário ou senha inválido!
        </Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          placeholder="Usuário"
          style={styles.input}
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        <View style={styles.input}>
          <TextInput
            placeholder="Senha"
            style={{ width: "85%" }}
            secureTextEntry={showPass}
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={password}
          />
          <PassView showPass={showPass} setShowPass={setShowPass} />
        </View>
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
