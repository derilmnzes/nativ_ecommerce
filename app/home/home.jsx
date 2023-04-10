import { Link, useNavigation, useRouter} from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import NavBar from "../../Layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchProducts,
} from "../../Redux/features/products/productSlice";
import { FlashList } from "@shopify/flash-list";
import { Ionicons } from "@expo/vector-icons";

const image = [
  require('../../assets/icons/1.png'),
  require('../../assets/icons/2.png'),
  require('../../assets/icons/3.png'),
  require('../../assets/icons/4.png'),
];



const Home = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter()
  const { products, categories } = store.product;

  const [filterValue,setFilterValue] = useState('electronics')
  
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <NavBar />
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <TextInput
            placeholder="Search"
            style={{
              padding: 10,
              borderWidth: 1,
              color: "gray",
              width: "80%",
              marginHorizontal: 5,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              backgroundColor: "black",
              height: 50,
              borderRadius: 10,
              width: "15%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="filter-alt" size={24} color="white" />
          </View>
        </View>

     <View>
     <FlatList
     showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={categories}
          renderItem={({ item, index }) => {
           
            return (
           <TouchableOpacity onPress={()=>setFilterValue(item)}>
               <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginHorizontal: 10,
                  marginBottom:10,
                  paddingHorizontal:10,
                  borderRadius:10,
                  backgroundColor:filterValue === item ? 'red' : 'white'
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "cover",
                    margin: 10,
                    borderRadius: 10,
                  }}
                  source={image[index]}
                />
                <Text style={{ fontWeight: "bold", fontSize: 18,color:filterValue !== item ? 'red' :'white' }}>{item}</Text>
              </View>
           </TouchableOpacity>
            );
          }}
        />
     </View>

        <View style={{ flex: 1 }}>
          <FlashList
         showsVerticalScrollIndicator={false}
            numColumns={2}
            data={products.filter(i=> i.category === filterValue)}
            estimatedItemSize={200}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: "95%",
                    marginBottom: 10,
                    marginHorizontal: 5,
                    padding: 10,
                    height: 300,
                    borderRadius: 10,
                    borderColor: "black",
                    borderWidth: 1,
                   
                  }}
                >
                  <TouchableOpacity onPress={()=>router.push(`/product/${item.id}`)}>
                 <View  style={{ height: "60%", width: "100%" }}>
          
                  
              <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain",
                      }}
                      source={{
                        uri: item.image,
                      }}
                    />
            
                  </View>
             
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
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
                  </View>

              
              <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                      color: "black",
                      fontSize: 18,
                      fontWeight: "bold",
                      height:'18%',
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.title}
                  </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                      $ {item.price}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "red",
                        flexDirection:'row',
                        paddingHorizontal: 10,
                        paddingVertical:5,
                        borderRadius: 50,
                      }}
                    >
                      <MaterialIcons
                        name="add-shopping-cart"
                        size={15}
                        color="white"
                      />
                      <Text style={{color:'white'}}>Add to cart</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
