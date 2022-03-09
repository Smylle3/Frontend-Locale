import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";

import Gstyles from "../../../../Globalstyles";
import NavBar from "../../../components/navbar";
import config from "../../../../app.json";
import ModalMy from "../../../components/modal";
import InputMy from "../../../components/input";
import QRCodeMy from "../../../components/qrCode";

export default function Cadastro({ navigation }) {
  const [msgPass, setMsgPass] = useState("");
  const [isModal, setIsModal] = useState(false);

  const [code, setCode] = useState("Cadastre uma encomenda!");
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  const [local, setLocal] = useState(config.origin);
  const [qrCode, setQrCode] = useState(null);
  let result = "Cadastre uma encomenda!";
  let length = 20;
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function randomCode() {}

  useEffect(() => {
    async function getUserInfo() {
      let response = await AsyncStorage.getItem("userData");
      let jsonUser = JSON.parse(response);
      setUser(jsonUser.id);
    }
    getUserInfo();
  }, []);

  async function sendForm() {
    result = "";
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(result);

    let response = await fetch(`${config.urlRoot}api/tracks/new-track`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserId: user,
        code: result,
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

    let resQRCode = await fetch(`${config.urlRoot}api/tracks/new-QRCode`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: result,
      }),
    });
    let jsonQRCode = await resQRCode.json();
    setCode(result);
    setQrCode(jsonQRCode);

    if (jsonProduct == "Sucesso") {
      setMsgPass("Encomenda cadastrada com sucesso!");
      setIsModal(true);
    } else if (jsonProduct == "Falha") {
      setMsgPass("Falha ao cadastrar encomenda!");
      setIsModal(true);
    }
  }

  async function shareQR() {}

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
              onPress={() => {
                sendForm();
              }}
              style={Gstyles.buttomStyle}
            >
              <Text style={Gstyles.buttomStyleTxt}>Cadastrar encomenda</Text>
            </TouchableOpacity>
          </View>
          <View style={Gstyles.viewForm}>
            <Text style={Gstyles.initTxt}>QRCode do código da encomenda</Text>
            <Text style={Gstyles.codeTxt}>{code}</Text>
            <QRCodeMy qrCode={qrCode} code={code} />
            <TouchableOpacity
              onPress={() => {}}
              style={Gstyles.shareButtomStyle}
            >
              <Icon name="share-social-outline" color="#1769aa" size={20} />
              <Text style={Gstyles.shareButtomStyleTxt}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setProduct(null);
                setCode("Receba o código aqui!");
                setQrCode(null);
              }}
              style={Gstyles.buttomStyleRed}
            >
              <Text style={Gstyles.buttomStyleTxtRed}>Limpar dados</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
