import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from "react-native";
import styles from "./styles";

export default function LoginPage({ navigation }) {
  const [alert, setAlert] = useState("none");
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin] = useState(null);

  async function sendForm() {
    let response = await fetch("http://192.168.100.17:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user,
        password: password,
      }),
    });
    let jsonReturn = await response.json();
    if(jsonReturn === "falied"){
      setAlert("flex");
      setTimeout(() => {
        setAlert("none")
      }, 3000);
    } else {
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
            setUser(text);
          }}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => {
            setPassword(text);
          }}
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
