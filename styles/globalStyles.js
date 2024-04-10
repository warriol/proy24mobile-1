import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  containerTop: {
    paddingTop: 30,
    alignItems: 'center',
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: "#cfcfcf",
    width: "80%",
  },
  containerScroll: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "dodgerblue"
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "white",
  },
  label: {
    fontSize: 24,
    color: "gainsboro",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    margin: 12,
    height: 40,
  },
  errorText: {
    fontSize: 20,
    color: "red",
    marginBottom: 10,
  },
  successText: {
    fontSize: 20,
    color: "green",
    marginBottom: 10,
  },
  imagen200: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  containerCentrado: {
    alignItems: 'center',
  },
});
