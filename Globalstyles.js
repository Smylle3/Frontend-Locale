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
});

export default Gstyles;
