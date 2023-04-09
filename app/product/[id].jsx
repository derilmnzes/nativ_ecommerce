import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Button, ScrollView } from "react-native";
import NavBar from "../../Layout/Navbar";
import { useSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../Redux/features/products/productSlice";
import { Image } from "react-native";

const Product = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { id } = useSearchParams();
  const { product } = store.product;
 
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
   
        <View style={{ width: "100%", height: "40%", padding: 10 }}>
          <View style={{ width: "100%", height: "100%" }}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
              source={{
                uri: product.image,
              }}
            />
          </View>
          <View style={{ paddingVertical: 20 }}>
            <View>
             
            </View>
            <View>
              <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                {product.title}
              </Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                {" "}
                {product.category}
              </Text>
            </View>
            <View >
              <Text style={{ fontSize: 22,fontWeight:500 ,color:'gray',letterSpacing:1}}>{product.description}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 20,
              }}
            >
              <Text style={{fontSize:40,fontWeight:'bold'}}>$ {product.price}</Text>
              <View
                style={{
                  padding: 10,
                  backgroundColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white",fontWeight:'bold' }}>Add To Cart</Text>
              </View>
            </View>
          </View>
        </View>
    
    </SafeAreaView>
  );
};

export default Product;
