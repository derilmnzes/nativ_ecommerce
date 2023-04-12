import { Link, Stack, usePathname } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Footer = () => {
  const pathname = usePathname();
  
  const footerIcons = [
    { name: "home", size: 24, color: "black", href: "/home" },
    { name: "add-to-list", size: 24, color: "black", href: "/newProduct" },
    { name: "shopping-cart", size: 24, color: "black", href: "" },
    { name: "user", size: 24, color: "black", href: "" },
  ];

  return (
    <View
      style={{
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
    
      {footerIcons.map((icon, index) => (
        <View
          key={index}
          style={
            pathname === icon.href ? styles.active : null
          } 
        >
          <Link href={icon.href}>
            <Entypo name={icon.name} size={icon.size} color={pathname === icon.href ?  'white' :icon.color} />
          </Link>
        </View>
      ))}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  active: {
    backgroundColor: "red",
    padding:5,
    borderRadius:50
  },
});
