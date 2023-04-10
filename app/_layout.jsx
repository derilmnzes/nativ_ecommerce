import { Stack } from "expo-router";
import NavBar from "../Layout/Navbar";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { Image,View } from "react-native";



const Layout = () => {


  return (
    <>
     <Provider store={store}>
     <Stack screenOptions={{
      title:"",
      headerLeft:()=> <View>
      <Image style={{width:140,resizeMode:'contain',height:40}} source={require('../assets/logo/logo.png')} />
    </View>
     }} />
     </Provider>
    </>
  );
};

export default Layout;
