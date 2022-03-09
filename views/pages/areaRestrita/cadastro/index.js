import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Gstyles from "../../../../Globalstyles";
import NavBar from "../../../components/navbar";
import config from "../../../../app.json";
import ModalMy from "../../../components/modal";
import InputMy from "../../../components/input";

export default function Cadastro({ navigation }) {
  const [msgPass, setMsgPass] = useState("");
  const [isModal, setIsModal] = useState(false);

  const [code, setCode] = useState("");
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  const [local, setLocal] = useState(config.origin);

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
    let response = await fetch(`${config.urlRoot}api/tracks/new-track`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserId: user,
        code: code,
        product: product,
        local: local,
      }),
    });
    let resTackId = await response.json();
    let resProduct = await fetch(`${config.urlRoot}api/products/new-product`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TrackId: resTackId,
        product: product,
      }),
    });
    let jsonProduct = await resProduct.json();
    if (jsonProduct == "Sucesso") {
      setMsgPass("Encomenda cadastrada com sucesso!");
      setIsModal(true);
    } else if (jsonProduct == "Falha") {
      setMsgPass("Falha ao cadastrar encomenda!");
      setIsModal(true);
    }
  }

  return (
    <View style={Gstyles.scroollContainer}>
      <NavBar title="Cadastrar encomenda" navigation={navigation} />
      <ModalMy msgPass={msgPass} isModal={isModal} setIsModal={setIsModal} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        style={{ marginTop: 15 }}
      >
        <View style={Gstyles.keyView}>
          <View style={Gstyles.viewForm}>
            <Text style={Gstyles.initTxt}>Cadastre uma encomenda</Text>
            <InputMy
              nameUser={product}
              setNameUser={setProduct}
              title="Nome do produto"
              isPassword="no"
            />
            <TouchableOpacity
              onPress={() => sendForm()}
              style={Gstyles.buttomStyle}
            >
              <Text style={Gstyles.buttomStyleTxt}>Cadastrar encomenda</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
