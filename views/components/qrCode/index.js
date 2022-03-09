import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";

import Gstyles from "../../../Globalstyles";
import Logo from "../../../assets/icon/CompassOrange.png";

export default function QRCodeMy(props) {
  const [isCode, setIsCode] = useState("none");
  useEffect(() => {
    function showCode() {
      if (props.qrCode == "Cadastre uma encomenda!") {
        setIsCode("none");
      } else {
        setIsCode("flex");
      }
    }
    showCode();
  }, [props.qrCode]);
  return (
    <View style={Gstyles.QRcode(isCode)}>
      {/*<QRCode
        value={props.code ? props.code : "N/A"}
        size={250}
        color="#b2772c"
        logo={Logo}
        logoBackgroundColor="#fff"
      />*/}
      <Image source={{ uri: props.qrCode, height: 250, width: 250 }} />
    </View>
  );
}
