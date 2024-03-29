import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff0db",
  },
  viewImage: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 138,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    justifyContent: "center",
    alignItems: "center",

    margin: 15,
    width: "60%",
    height: "auto",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 1,
    marginTop: 8,

    paddingLeft: 10,
    width: "60%",
    height: 35,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#49a879",
    backgroundColor: "#69f0ae",
  },
  buttonR: {
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 8,
    marginTop: 1,

    paddingLeft: 10,
    width: "60%",
    height: 35,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#b2772c",
    backgroundColor: "#ffab40",
  },
  viewButtonS: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonS: {
    justifyContent: "center",
    alignItems: "center",

    margin: 2,

    paddingLeft: 10,
    width: "30%",
    height: 25,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ffab40",
  },
  buttonST: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#ffab40",
  },
});

export default styles;
