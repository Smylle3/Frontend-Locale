import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NavBar from "../../../components/navbar";
import styles from "./styles";
import config from "../../../../app.json";

export default function Cadastro({ navigation }) {
  const adress = config.origin;
  const [code, setCode] = useState(null);
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    randomCode();
  }, []);

  async function randomCode() {
    let result = "";
    let length = 20;
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    setCode(result);
  }

  useEffect(() => {
    async function getUserInfo() {
      let response = await AsyncStorage.getItem("userData");
      let jsonUser = JSON.parse(response);
      setUser(jsonUser.id);
    }
    getUserInfo();
  }, []);

  async function sendForm() {
    let response = await fetch(`${config.urlRoot}create-tracking`, {
      method: "POST",
      body: JSON.stringify({
        userId: user,
        code: code,
        product: product,
        local: adress,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

  }

  return (
    <View style={[styles.container, styles.top]}>
      <NavBar title="Cadastrar encomenda" navigation={navigation} />
      <Text>
        {adress} {user} {product} {code}
      </Text>

      <View style={styles.changePassForm}>
        <Text style={styles.initTxt}>Cadastre uma encomenda</Text>
        <View style={styles.inputsView}>
          <TextInput
            style={styles.inputPass}
            placeholder="Nome do produto"
            value={product}
            onChangeText={(text) => setProduct(text)}
          />
        </View>
        <TouchableOpacity onPress={() => sendForm()} style={styles.buttomPass}>
          <Text style={styles.buttomPassTxt}>Cadastrar encomenda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
