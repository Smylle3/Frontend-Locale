import { StyleSheet } from "react-native";

const Gstyles = StyleSheet.create({
  scroollContainer: {
    flex: 1,
    backgroundColor: "#fff0db",
  },
  inputStyleFull: {
    flexDirection: "column",
    width: "100%",
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
  buttomStyle: {
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
  buttomStyleTxt: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#49a879",
  },

  /*CONFIGURAÇÕES DO MODAL*/
  modalStyle: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: 600,
    margin: 90,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "white",

    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#df487f",

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
    color: "#000",
  },
  modalStyleBtn: {
    padding: 6,
    width: "70%",
    borderColor: "#f9c8d9",
    borderWidth: 1,
    borderRadius: 8,

    backgroundColor: "#df487f",
  },
  modalStyleBtnTxt: {
    textAlign: "center",
    color: "#f9c8d9",
  },
  /*CONFIGURAÇÕES DO MODAL*/
});

export default Gstyles;
