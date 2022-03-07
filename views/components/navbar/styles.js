import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    zIndex: 99,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingTop: 40,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",

    backgroundColor: "#ffab40",
    
  },
  textTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#b2772c",
  },
});

export default styles;