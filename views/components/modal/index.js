import React, { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function ModalMy(props) {
  const [colorBack, setColorBack] = useState("#df487f");
  const [colorFont, setColorFont] = useState("#f9c8d9");

  useEffect(() => {
    function changeColor() {
      if (
        props.msgPass == "User name alterado com sucesso!" ||
        props.msgPass == "Senha alterada com sucesso!"
      ) {
        setColorBack("#69f0ae");
        setColorFont("#49a879");
      } else {
        setColorBack("#df487f");
        setColorFont("#971243");
      }
    }
    changeColor();
  }, [props.msgPass]);

  return (
    <Modal animationType="slide" transparent={true} visible={props.isModal}>
      <View style={styles.modalStyle(colorBack)}>
        <Text style={styles.modalStyleTxt(colorFont)}>{props.msgPass}</Text>
        <TouchableOpacity
          onPress={() => {
            props.setIsModal(false);
          }}
          style={styles.modalStyleBtn(colorBack, colorFont)}
        >
          <Text style={styles.modalStyleBtnTxt(colorFont)}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
