import { Stack } from "expo-router";
import { View, Text, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const NavBar = () => {
  return (
    <Stack.Screen
    options={{
      headerStyle: { backgroundColor: "white" },
      headerShadowVisible: true,
      headerRight: () => <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:80}}>
        
         <Entypo name="shopping-cart" size={24} color="black" />
         <AntDesign name="menufold" size={24} color="black" />
      </View>,
    
      headerLeft:()=> <View>
        <Image style={{width:140,resizeMode:'contain',height:40}} source={require('../assets/logo/logo.png')} />
      </View>
    }}
  />
  );
};

export default NavBar;
