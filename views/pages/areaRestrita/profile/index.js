import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import config from "../../../../app.json";
import NavBar from "../../../components/navbar";
import styles from "./styles";

export default function Profile({ navigation }) {
  const [user, setUser] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
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
      setModalVisible(true);
    } else {
      let response = await fetch(`${config.urlRoot}verify-pass`, {
        method: "POST",
        body: JSON.stringify({
          id: idUser,
          oldPassword: oldPassword,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let jsonChangePass = await response.json();

      setMsgPass(jsonChangePass);
      setModalVisible(true);
    }
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }
  async function changeUserName() {
    if (nameUser === null || nameUser.length == 0) {
      setModalVisible(true);
      setMsgPass("Informe um nome de usuário válido!");
      setNameUser("");
    } else {
      let response = await fetch(`${config.urlRoot}new-user`, {
        method: "POST",
        body: JSON.stringify({
          atualUser: user,
          nameUser: nameUser,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let jsonChangePass = await response.json();
      console.log(jsonChangePass);
      if (jsonChangePass == nameUser) {
        setMsgPass("User name alterado com sucesso!");
        setModalVisible(true);
        setUser(jsonChangePass);
      }
      setNameUser("");
    }
  }

  return (
    <View style={[styles.container, styles.top]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalStyle}>
          <Text style={styles.modalStyleTxt}>{msgPass}</Text>
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={styles.modalStyleBtn}
          >
            <Text style={styles.textStyle}>Fechar</Text>
          </Pressable>
        </View>
      </Modal>

      <NavBar title="Perfil" navigation={navigation} />
      <View style={styles.imgTitle}></View>
      <Text style={styles.titleName}>{user}</Text>
      {/*BOX PARA ALTERAR USER*/}
      <View style={styles.changePassForm}>
        <Text style={styles.initTxt}>Altere seu nome de usuário</Text>
        <View style={styles.inputsView}>
          <TextInput
            style={styles.inputPass}
            placeholder="Nome de usuário"
            value={nameUser}
            onChangeText={(text) => setNameUser(text)}
          />
        </View>
        <TouchableOpacity
          onPress={() => changeUserName()}
          style={styles.buttomPass}
        >
          <Text style={styles.buttomPassTxt}>Alterar user</Text>
        </TouchableOpacity>
      </View>

      {/*BOX PARA ALTERAR SENHA*/}
      <View style={styles.changePassForm}>
        <Text style={styles.initTxt}>Altere sua senha</Text>
        <View style={styles.inputsView}>
          <TextInput
            style={styles.inputPass}
            placeholder="Senha atual"
            value={oldPassword}
            onChangeText={(text) => setOldPassword(text)}
          />
          <TextInput
            style={styles.inputPass}
            placeholder="Nova senha"
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TextInput
            style={styles.inputPass}
            placeholder="Confirmar a nova senha"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        <TouchableOpacity
          onPress={() => changePassword()}
          style={styles.buttomPass}
        >
          <Text style={styles.buttomPassTxt}>Alterar senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
