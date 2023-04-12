import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 10,
    },
    categoryContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginHorizontal: 10,
      marginBottom: 10,
      marginTop:10,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
    categoryIcon: {
      width: 40,
      height: 40,
      resizeMode: "cover",
      margin: 10,
      borderRadius: 10,
    },
    categoryText: {
      fontWeight: "bold",
      fontSize: 18,
    },
    flashListContainer: {
      flex: 1,
    },
  });

