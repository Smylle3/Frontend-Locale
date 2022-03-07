import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputStyleFull: {
    flexDirection: "column",
    width: "100%",
  },
  viewInputStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    fontSize: 16,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ffab40",

    height: 40,
    width: "90%",
    
    margin: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputStyle: {
    textAlign: "left",

    fontSize: 16,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ffab40",

    height: 40,
    width: "90%",
    margin: 2,
    paddingLeft: 10,
  },
});

export default styles;
