import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  keyView: {
    alignItems: "center",
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
  profilePic: {
    backgroundColor: "#fff",

    margin: 15,
    width: 150,
    height: 150,

    borderRadius: 75,
  },
  initTxt: {
    margin: 10,
    color: "#b2772c",
  },
  titleName: {
    fontSize: 40,
    color: "#b2772c",
  },
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
  },
  modalStyleBtn: {
    padding: 6,
    width: "70%",
    borderColor: "#f9c8d9",
    borderWidth: 1,
    borderRadius: 8,

    backgroundColor: "#df487f",
  },
});

export default styles;
