import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
  },
  textInputStyle: {
    textAlign: "center",
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderColor: "blue",
    fontSize: 22,
    marginVertical: 5,
  },
  buttonStyle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "blue",
    padding: 5,
    marginTop: 10,
    minWidth: 250,
    height: 60,
    justifyContent: "center",
  },
  buttonTextStyle: {
    fontSize: 22,
    padding: 5,
    color: "white",
    textAlign: "center",
  },
  cardStyle: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  cardTextStyle: {
    color: "#20B2AA",
    fontSize: 14,
    marginBottom: 2,
  },
  cardDeleteStyle: {
    width: 60,
    height: 70,
    backgroundColor: "#40E0D0",
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  fdContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fdAvatarStyle: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  fdTextStyle: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
    marginBottom: 5,
  },
});

export default styles;
