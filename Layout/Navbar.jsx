import { Stack } from "expo-router";
import { View, Text } from "react-native";
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
      headerTitle: "",
      headerLeft:()=> <View>
        <Text style={{fontSize:24,fontWeight:'bold'}}>Logo</Text>
      </View>
    }}
  />
  );
};

export default NavBar;
