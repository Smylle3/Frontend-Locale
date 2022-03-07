import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PassView from "../../../components/passView/passView";
import config from "../../../../app.json";
import NavBar from "../../../components/navbar";
import styles from "./styles";
import Gstyles from "../../../../Globalstyles";
import InputMy from "../../../components/input";

export default function Profile({ navigation }) {
  const [user, setUser] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [idUser, setIdUser] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msgPass, setMsgPass] = useState("");
  const [showPass, setShowPass] = useState(true);

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
    <View style={Gstyles.scroollContainer}>
      <NavBar title="Perfil" navigation={navigation} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Gstyles.modalStyle}>
          <Text style={Gstyles.modalStyleTxt}>{msgPass}</Text>
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={Gstyles.modalStyleBtn}
          >
            <Text style={Gstyles.modalStyleBtnTxt}>Fechar</Text>
          </Pressable>
        </View>
      </Modal>
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
              showPass={showPass}
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
              showPass={showPass}
            />
            <InputMy
              nameUser={newPassword}
              setNameUser={setNewPassword}
              title="Nova senha"
              isPassword="yes"
              showPass={showPass}
            />
            <InputMy
              nameUser={confirmPassword}
              setNameUser={setConfirmPassword}
              title="Confirmar a nova senha"
              isPassword="yes"
              showPass={showPass}
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
