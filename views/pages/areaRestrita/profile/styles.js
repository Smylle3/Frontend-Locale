import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  keyView: {
    alignItems: "center",
    width: "100%",
  },

  profilePic: {
    backgroundColor: "#fff",

    margin: 15,
    width: 150,
    height: 150,

    borderRadius: 75,
  },
  titleName: {
    fontSize: 40,
    color: "#b2772c",
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
  initTxt: {
    margin: 10,
    color: "#b2772c",
  },
});

export default styles;
