import { Stack } from "expo-router";
import NavBar from "../Layout/Navbar";
import { Provider } from "react-redux";
import { store } from "../Redux/store";

const Layout = () => {
  return (
    <>
     <Provider store={store}>
     <Stack />
     </Provider>
    </>
  );
};

export default Layout;
