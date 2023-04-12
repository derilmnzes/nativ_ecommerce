import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import baseUrl from "../config/baseUrl";
import { styles } from "../styles/components/cardStyles";


const Card = ({ item, router }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push(`/product/${item._id}`)}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `${baseUrl.baseUrl}/images/${item.image}`,
            }}
          />
        </View>
        <View style={styles.ratingContainer}>
      
          {Array(Math.ceil(item.rating.rate))
            .fill()
            .map((_, index) => (
              <FontAwesome key={index} name="star" size={18} color="gold" />
            ))}
              {Array(Math.floor(5 - item.rating.rate))
            .fill()
            .map((_, index) => (
              <FontAwesome key={index} name="star-o" size={18} color="gold" />
            ))}
        </View>

        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {item.title}
        </Text>
      </TouchableOpacity>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$ {item.price}</Text>
        <View style={styles.addToCartContainer}>
          <MaterialIcons name="add-shopping-cart" size={15} color="white" />
          <Text style={styles.addToCartButton}>Add to cart</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
