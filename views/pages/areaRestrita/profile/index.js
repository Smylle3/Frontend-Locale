import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import config from "../../../../app.json";
import styles from "./styles";
import Gstyles from "../../../../Globalstyles";
import NavBar from "../../../components/navbar";
import InputMy from "../../../components/input";
import ModalMy from "../../../components/modal";

export default function Profile({ navigation }) {
  const [user, setUser] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [idUser, setIdUser] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msgPass, setMsgPass] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      let response = await AsyncStorage.getItem("userData");
      let jsonUser = JSON.parse(response);
      setUser(jsonUser.name);
      setIdUser(jsonUser.id);
    }
    getUserInfo();
  }, []);

  async function changePassword() {
    if (
      oldPassword === null ||
      oldPassword.length == 0 ||
      newPassword === null ||
      newPassword.length == 0 ||
      confirmPassword === null ||
      confirmPassword.length == 0
    ) {
      setMsgPass("Informe os dados!");
      setIsModal(true);
    } else {
      let response = await fetch(`${config.urlRoot}api/users/update-user`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idUser,
          oldPassword: oldPassword,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
          flag: 0,
        }),
      });
      let jsonChangePass = await response.json();

      setMsgPass(jsonChangePass);
      setIsModal(true);
    }
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }
  async function changeUserName() {
    if (nameUser === null || nameUser.length == 0) {
      setIsModal(true);
      setMsgPass("Informe um nome de usuário válido!");
      setNameUser("");
    } else {
      let response = await fetch(`${config.urlRoot}api/users/update-user`, {
        method: "POST",
        body: JSON.stringify({
          id: idUser,
          atualUser: user,
          nameUser: nameUser,
          flag: 1,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let jsonChangePass = await response.json();
      if (jsonChangePass == nameUser) {
        setMsgPass("User name alterado com sucesso!");
        setUser(jsonChangePass);
        setIsModal(true);
      }
      setNameUser("");
    }
  }

  return (
    <View style={Gstyles.scroollContainer}>
      <NavBar title="Perfil" navigation={navigation} />
      <ModalMy msgPass={msgPass} isModal={isModal} setIsModal={setIsModal} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        style={{ marginTop: 15 }}
      >
        <View style={styles.keyView}>
          <View style={styles.profilePic}></View>
          <Text style={styles.titleName}>{user}</Text>

          {/*BOX PARA ALTERAR USER*/}
          <View style={styles.viewForm}>
            <Text style={styles.initTxt}>Altere seu nome de usuário</Text>
            <InputMy
              nameUser={nameUser}
              setNameUser={setNameUser}
              title="Nome de usuário"
              isPassword="no"
            />
            <TouchableOpacity
              style={Gstyles.buttomStyle}
              onPress={() => changeUserName()}
            >
              <Text style={Gstyles.buttomStyleTxt}>Alterar user</Text>
            </TouchableOpacity>
          </View>
          {/*BOX PARA ALTERAR SENHA*/}
          <View style={styles.viewForm}>
            <Text style={styles.initTxt}>Altere sua senha</Text>
            <InputMy
              nameUser={oldPassword}
              setNameUser={setOldPassword}
              title="Senha atual"
              isPassword="yes"
            />
            <InputMy
              nameUser={newPassword}
              setNameUser={setNewPassword}
              title="Nova senha"
              isPassword="yes"
            />
            <InputMy
              nameUser={confirmPassword}
              setNameUser={setConfirmPassword}
              title="Confirmar a nova senha"
              isPassword="yes"
            />
            <TouchableOpacity
              style={Gstyles.buttomStyle}
              onPress={() => changePassword()}
            >
              <Text style={Gstyles.buttomStyleTxt}>Alterar senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
