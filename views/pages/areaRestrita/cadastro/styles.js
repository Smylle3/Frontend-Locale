import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0db",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    justifyContent: "flex-start",
  },
  initTxt: {
    margin: 10,
    color: "#b2772c",
  },
  titleName: {
    fontSize: 40,
    color: "#b2772c",
  },
  changePassForm: {
    zIndex: 1,
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "80%",
    padding: 5,

    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  inputsView: {
    width: "100%",
    alignItems: "center",
  },
  inputPass: {
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
  buttomPass: {
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 8,
    marginTop: 8,

    paddingLeft: 10,
    width: "45%",
    height: 35,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#49a879",
    backgroundColor: "#69f0ae",
  },
  buttomPassTxt: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#49a879",
  },
});

export default styles;
