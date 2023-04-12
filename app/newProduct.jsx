import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native";
import NavBar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import CustomDropdown from "../Components/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/features/products/productSlice";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import baseUrl from "../config/baseUrl";
import { styles } from "../styles/newProductStyles";




const NewProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const store = useSelector((state) => state);
  const { redirect } = store.product;

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "electronics",
    image: null,
  });

  useEffect(() => {
    if (redirect) {
      router.push("home");
    }
  }, [redirect]);

  const handleImageUpload = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        
        const formData = new FormData();
        formData.append("image", {
          uri: result.assets[0].uri,
          type: "image/jpeg",
          name: "image.jpg",
        });
        console.log(formData)
        const res = await axios.post(
          `${baseUrl.baseUrl}/product/upload/image`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(res.data)
        setProduct({ ...product, image: res.data.data });
      }
    } catch (err) {
      
    ToastAndroid.show('Something went wrong please try again',ToastAndroid.SHORT)
    }
  };

  const handleChange = (key, value) => {
    setProduct({ ...product, [key]: value });
  };

  const handleUpload = async () => {
    dispatch(addProduct(product));
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
            Upload New Product
          </Text>

          {/* Image Upload */}
          <TouchableOpacity
            onPress={handleImageUpload}
            style={styles.uploadImage}
          >
            {product.image ? (
              <Image
                source={{
                  uri: `${baseUrl.baseUrl}/images/${product.image}`,
                }}
                style={{ width: 140, height: 180 }}
              />
            ) : (
              <Text style={{ color: "blue" }}>
                <AntDesign name="cloudupload" size={24} color="black" /> Upload
                Image
              </Text>
            )}
          </TouchableOpacity>

          {/* Title Input */}
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={product.title}
            onChangeText={(value) => handleChange("title", value)}
          />

          {/* Category Dropdown */}
          <CustomDropdown
            label={product.category}
            items={[
              "electronics",
              "jewelery",
              "men's clothing",
              "women's clothing",
            ]}
            onSelect={(e) => {
              handleChange("category", e);
            }}
          />

          {/* Price Input */}
          <TextInput
            style={styles.input}
            placeholder="Price"
            keyboardType="numeric"
            value={product.price}
            onChangeText={(value) => handleChange("price", value)}
          />

          {/* Description Input */}
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Description"
            value={product.description}
            onChangeText={(value) => handleChange("description", value)}
            multiline
          />

          {/* Submit Button */}
          <TouchableOpacity
            onPress={() => {
              handleUpload();
            }}
            style={styles.submitButton}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Footer />
    </ScrollView>
  );
};


export default NewProduct;
