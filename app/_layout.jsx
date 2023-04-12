import { Stack } from "expo-router";
import NavBar from "../Layout/Navbar";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { Image,View } from "react-native";



const Layout = () => {


  return (
    <>
     <Provider store={store}>
     <Stack  screenOptions={{
      title:''
     }} />
     </Provider>
    </>
  );
};

export default Layout;
