import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Button, ScrollView, StyleSheet } from "react-native";
import NavBar from "../../Layout/Navbar";
import { useSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../Redux/features/products/productSlice";
import { Image } from "react-native";
import LottieAnimation from "../../Components/Lottiefiles";
import { FontAwesome } from "@expo/vector-icons";
import Footer from "../../Layout/Footer";

const Product = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { id } = useSearchParams();
  const { product } = store.product;

  const { loading } = store.loading;

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  return (
    <>
    {console.log(product)}
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: product.image,
              }}
            />
          </View>
          <View style={styles.ratingContainer}>
          {Array(Math.ceil(product.rating.rate))
            .fill()
            .map((_, index) => (
              <FontAwesome key={index} name="star" size={18} color="gold" />
            ))}
              {Array(Math.floor(5 - product.rating.rate))
            .fill()
            .map((_, index) => (
              <FontAwesome key={index} name="star-o" size={18} color="gold" />
            ))}
            <Text style={styles.ratingCount}> ({product.rating.count})</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{product.title}</Text>
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{product.category}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>$ {product.price}</Text>
            <View style={styles.addToCartContainer}>
              <View style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>
                  <FontAwesome name="cart-plus" size={24} color="white" /> Add to
                  cart
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
    <Footer />
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  ratingCount: {
    fontSize: 20,
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  categoryContainer: {
    marginTop: 10,
  },
  category: {
    fontSize: 16,
    color: "gray",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
  },
  addToCartContainer: {
    backgroundColor: "red",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  addToCartButtonText:{
    color:'white',
    fontWeight:'bold'
  },
  descriptionContainer:{

  },

  description:{
fontSize:20,
fontWeight:'500',
letterSpacing:1,
textAlign:'justify',
lineHeight:30,
color:'gray'
  }

});


export default Product;
