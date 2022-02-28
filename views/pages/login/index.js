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
        <TextInput placeholder="E-mail" style={styles.input} />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setAlert("flex");
          }}
        >
          <Text>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonR} onPress={()=>{navigation.navigate("Home")}}>
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
