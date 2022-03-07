import React, { useState } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function PassView( props ) {
  const [eye, setEye] = useState("eye-outline");

  function eyes() {
    if (props.showPass === true) {
      props.setShowPass(false);
      setEye("eye-off-outline");
    } else {
      props.setShowPass(true);
      setEye("eye-outline");
    }
  }

  return (
    <Pressable
      onPress={() => {
        eyes();
      }}
    >
      <Icon name={eye} color="#ffab40" size={20} />
    </Pressable>
  );
}
