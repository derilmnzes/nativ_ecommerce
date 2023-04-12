const { StyleSheet } = require("react-native");



export const styles = StyleSheet.create({
    container: {
      width: "95%",
      marginBottom: 10,
      marginHorizontal: 5,
      padding: 10,
      height: 300,
      borderRadius: 10,
      borderColor: "black",
      borderWidth: 1,
    },
    imageContainer: {
      height: "60%",
      width: "100%",
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode:'stretch',
    },
    ratingContainer: {
      display: "flex",
      flexDirection: "row",
      paddingVertical:10
    },
    title: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
      height:'17%'
    
    },
    priceContainer: {
      flexDirection: "row",
      alignItems:'flex-end',
      justifyContent: "space-between",
    },
    price: {
      fontSize: 15,
      fontWeight: "500",
    },
    addToCartContainer: {
      backgroundColor: "red",
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 50,
    },
    addToCartButton: {
      color: "white",
    },
  });

  
