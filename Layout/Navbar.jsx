import React, { useState } from "react";
import { Stack } from "expo-router";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';

const NavBar = () => {
  const [isSearchActive, setSearchActive] = useState(false); 
  const [searchText, setSearchText] = useState(""); 

  const handleSearchIconPress = () => {
    setSearchActive(true); 
  }


  return (
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: "white" },
        headerShadowVisible: true,
        title: "",
        headerLeft: () => (
          !isSearchActive && (
            <View>
              <Image
                style={{ width: 140, resizeMode: "contain", height: 40 }}
                source={require("../assets/logo/logo.png")}
              />
            </View>
          )
        )
      }}
    />
  );
};

export default NavBar;
