import React, { useState } from "react";
import { TextInput, View } from "react-native";

import styles from "./styles";
import PassView from "../passView/passView";

export default function InputMy(props) {
  const [showPass, setShowPass] = useState(true);

  if (props.isPassword == "yes") {
    return (
      <View style={styles.viewInputStyle}>
        <TextInput
          style={styles.inputStylePass}
          placeholder={props.title}
          value={props.nameUser}
          onChangeText={(text) => props.setNameUser(text)}
          secureTextEntry={showPass}
        />
        <PassView showPass={showPass} setShowPass={setShowPass} />
      </View>
    );
  } else if (props.isPassword == "no") {
    return (
      <TextInput
        style={styles.inputStyleTxt}
        placeholder={props.title}
        value={props.nameUser}
        onChangeText={(text) => props.setNameUser(text)}
        secureTextEntry={false}
      />
    );
  }
}
