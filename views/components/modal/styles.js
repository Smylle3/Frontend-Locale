import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalStyle: (colorBack)=>({
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
    borderColor: colorBack,

    shadowColor: colorBack,
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 9,
  }),
  modalStyleTxt: (colorFont)=>({
    marginBottom: 15,
    textAlign: "center",
    color: colorFont,
  }),
  modalStyleBtn: (colorBack, colorFont) => ({
    padding: 6,
    width: "70%",
    borderColor: colorFont,
    borderWidth: 1,
    borderRadius: 8,

    backgroundColor: colorBack,
  }),
  modalStyleBtnTxt: (colorFont) => ({
    textAlign: "center",
    textAlignVertical: "center",
    color: colorFont,
  }),
});
export default styles;
