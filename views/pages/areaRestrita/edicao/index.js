import React, { useEffect, useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";

import Gstyles from "../../../../Globalstyles";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavBar from "../../../components/navbar";
import ModalMy from "../../../components/modal";

export default function Edicao({ navigation }) {
  const [objCode, setObjCode] = useState("QK249414737BR");

  useEffect(() => {
    async function sendForm() {
      let response = await fetch(
        "https://proxyapp.correios.com.br/v1/sro-rastro/QK249414737BR",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          /*body: JSON.stringify({
          name: user,
          password: password,
        }),*/
        }
      );
      let jsonReturn = await response.json();
      let objeto = jsonReturn.objetos;
      //console.log(objeto);
      let response2 = await AsyncStorage.getItem("userData");
      let jsonUser = JSON.parse(response2);
      //console.log(jsonUser.createdAt);
      /*if (jsonReturn === "falied") {
        setAlert("flex");
        setTimeout(() => {
          setAlert("none");
        }, 3000);
        await AsyncStorage.clear();
      } else {
        let userData = await AsyncStorage.setItem(
          "userData",
          JSON.stringify(jsonReturn)
        );
        navigation.navigate("Profile");
      }*/
    }
    sendForm();
  }, []);

  return (
    <View style={Gstyles.scroollContainer}>
      <NavBar title="Editar encomenda" navigation={navigation} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        style={{ marginTop: 15 }}
      >
        <View style={Gstyles.keyView}>
          <View style={Gstyles.viewForm}>
            
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
