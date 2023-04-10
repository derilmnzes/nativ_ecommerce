import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Button, ScrollView } from "react-native";
import NavBar from "../../Layout/Navbar";
import { useSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../Redux/features/products/productSlice";
import { Image } from "react-native";
import LottieAnimation from "../../Components/Lottiefiles";
import { FontAwesome } from '@expo/vector-icons';


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
    <ScrollView>
      <SafeAreaView>
        <View style={{ padding: 10 }}>
          <View style={{ width: "100%" }}>
            <Image
              style={{ width: "100%", height: 400, resizeMode: "contain" }}
              source={{
                uri: product.image,
              }}
            />
          </View>
          <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems:'center',
                      paddingVertical: 10,
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <FontAwesome
                        key={index}
                        name="star"
                        size={18}
                        color="gold"
                      />
                    ))}
                
                    <Text style={{fontSize:20}}>
                    {' '} ({product.rating.count})
                    </Text>
                  </View>
          <View>
            <Text style={{fontSize:40,fontWeight:'bold'}}>{product.title}</Text>
          </View>
          <View>
            <Text>
              {product.category}
            </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:15}}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>$ {product.price}</Text>

            <View style={{backgroundColor:'red',borderRadius:20,paddingVertical:10,paddingHorizontal:20,alignItems:'center'}}>
          <Text style={{color:'white',fontWeight:'bold'}}>
          <FontAwesome name="cart-plus" size={24} color="white" />{' '}
            Add to cart
          </Text>
            </View>
          </View>


          
          <View>
              <Text style={{fontSize:18,fontWeight:'500',lineHeight:30,textAlign:'justify',color:'gray'}}>
                {product.description}
              </Text>
              </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Product;

/*



    <View style={{flex:1,padding:10,backgroundColor:'white' }}>
   
        {loading ? (
          <View style={{ width: "100%", height: "100%" }}>
            <LottieAnimation
              source={require("../../assets/loading.json")}
              height={"100%"}
              width={"100%"}
            />
          </View>
        ) : (
         
          <View style={{flex:1}}>
            <View style={{ width:'100%',height:'40%' }}>
              <Image
                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                source={{
                  uri: product.image,
                }}
              />
            </View>
         <ScrollView style={{flex:1}}>
         <View style={{ paddingVertical: 20,flex:1 }}>
            
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 20,
              }}
            >
              <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                $ {product.price}
              </Text>
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
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Add To Cart
                </Text>
              </View>
            </View>
            
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: "gray",
                  letterSpacing: 1,
                }}
              >
                {product.description}
              </Text>
            </View>

          
          </View>
         </ScrollView>
          </View>
       
        )}
   
    </View>
  
  */
