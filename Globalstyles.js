import { StyleSheet } from "react-native";

const Gstyles = StyleSheet.create({
  scroollContainer: {
    flex: 1,
    backgroundColor: "#fff0db",
  },
  initTxt: {
    margin: 10,
    color: "#b2772c",
  },
  keyView: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  viewForm: {
    alignItems: "center",
    justifyContent: "center",

    marginTop: 10,
    padding: 5,
    borderRadius: 8,
    width: "80%",

    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  buttomStyle: {
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 8,
    marginTop: 8,

    paddingLeft: 10,
    paddingRight: 10,
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
  buttomStyleRed: {
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 8,
    marginTop: 8,

    paddingLeft: 10,
    paddingRight: 10,
    height: 35,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#971243",
    backgroundColor: "#df487f",
  },
  buttomStyleTxtRed: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#971243",
  },
  shareButtomStyle: {
    alignItems: "center",
    flexDirection: "row",

    marginBottom: 8,
    marginTop: 8,

    padding: 8,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#1769aa",
    backgroundColor: "#4dabf5",
  },
  shareButtomStyleTxt: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#1769aa",
  },
  QRcode: (isCode) => ({
    padding: 0,
    display: isCode,
  }),
  codeTxt: {
    margin: 5,
    color: "#b2772c",
    borderColor: "#ffab40",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
});

export default Gstyles;
