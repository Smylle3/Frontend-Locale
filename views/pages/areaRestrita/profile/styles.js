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
  changePassForm: {
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
  alertMsgTxt: {
    textAlign: "center",
    textAlignVertical: "center",

    marginTop: 10,
    width: 170,
    height: 25,

    borderColor: "#971243",
    borderWidth: 1,
    borderRadius: 8,

    backgroundColor: "#df487f",
    color: "#f9c8d9",
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
    width: "40%",
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

  modalStyle: {
    justifyContent: "center",
    alignItems: "center",

    margin: 90,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "white",

    borderRadius: 10,
    borderWidth: 1,
    borderColor:"#df487f",

    shadowColor: "#df487f",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 9,
  },
  modalStyleTxt: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalStyleBtn: {
    padding: 6,
    width: "30%",
    borderColor: "#f9c8d9",
    borderWidth: 1,
    borderRadius: 8,

    backgroundColor: "#df487f",
  },
  textStyle: {
    color: "#f9c8d9",
    textAlign: "center",
  },
  initTxt: {
    margin: 10,
    color: "#b2772c",
  },
  titleName: {
    fontSize: 40,
    color: "#b2772c",
  }
});

export default styles;
