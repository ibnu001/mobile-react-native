import { StyleSheet } from "react-native";
const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    padding: 25,
    borderRadius: 15,
  },
  headerForm: {
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: '#f56b00',
    fontSize: 32
  },
});

export default loginStyles;
