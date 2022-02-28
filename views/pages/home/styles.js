import { StyleSheet } from "react-native";
import { cores } from "../../../Globalstyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0db",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 15,
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#ffbb66",
  }
});

export default styles;
