import { Dimensions } from "react-native";


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    formContainer: {
      width: "80%",
      height: screenHeight - 120,
      justifyContent: "center",
      alignItems: "center",
    },
    uploadImage: {
      marginTop: 16,
    },
    input: {
      marginTop: 16,
      height: 40,
      width: "100%",
      borderColor: "gray",
      borderWidth: 1,
      paddingHorizontal: 8,
    },
    submitButton: {
      marginTop: 16,
      backgroundColor: "red",
      borderRadius: 10,
      padding: 12,
      alignItems: "center",
      width: "100%",
    },
  });
  