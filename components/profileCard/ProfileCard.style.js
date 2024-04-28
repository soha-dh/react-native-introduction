import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  texts: {
    flex: 1,
    paddingLeft: 15,
  },
  header: {
    flexDirection: "row",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialBtn: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#eee",
  },
});
