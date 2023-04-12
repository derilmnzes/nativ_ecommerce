import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigation, useRouter } from "expo-router";
import NavBar from "../Layout/Navbar";
import { fetchProducts } from "../Redux/features/products/productSlice";
import { FlashList } from "@shopify/flash-list";
import Footer from "../Layout/Footer";
import Card from "../Components/Card";
import { styles } from "../styles/homeStyles";



const image = [
  require('../assets/icons/1.png'),
  require('../assets/icons/2.png'),
  require('../assets/icons/3.png'),
  require('../assets/icons/4.png'),
];

const Home = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const { products, categories } = store.product;

  const [filterValue, setFilterValue] = useState('electronics');

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <View style={styles.contentContainer}>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={categories}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => setFilterValue(item)}>
                  <View
                    key={index}
                    style={[
                      styles.categoryContainer,
                      { backgroundColor: filterValue === item ? 'red' : 'white' }
                    ]}
                  >
                    <Image
                      style={styles.categoryIcon}
                      source={image[index]}
                    />
                    <Text
                      style={[
                        styles.categoryText,
                        { color: filterValue !== item ? 'red' : 'white' }
                      ]}
                    >
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={styles.flashListContainer}>
          <FlashList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={products.filter(i => i.category === filterValue)}
            estimatedItemSize={200}
            renderItem={({ item }) => {
              return (
                <Card item={item} router={router} />
              );
            }}
          />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};



export default Home;
