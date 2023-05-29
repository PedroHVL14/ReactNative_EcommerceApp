import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: GlobalStyles.Colors.background,
  },
  content: {
    width: "100%",
  },
  title: {
    color: GlobalStyles.Colors.primary,
    fontSize: 36,
    fontFamily: "Khula-Bold",
    marginTop: 130,
    textAlign: "center",
  },
  inputs: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 170,
  },
});

export default styles;
