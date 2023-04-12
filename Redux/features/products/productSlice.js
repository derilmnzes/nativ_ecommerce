import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoading } from "../loader/loader";
import { ToastAndroid } from "react-native";
import axiosInstance from "../../../axios/axiosInstance";

const initialState = {
  products: [],
  categories: ["electronics", "jewelery", "men's clothing", "women's clothing"],
  redirect: false,
  loading: false,
  product: {
    title: "",
    price: "",
    description: "",
    image: null,
    rating: {
      count: 0,
      rate:0
    },
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload;
    },
    setProduct: (state, actions) => {
      state.product = actions.payload;
    },
    setRedirect: (state, actions) => {
      state.redirect = actions.payload;
    },
  },
});


export const { setProducts, setCategories, setProduct, setRedirect } =
  productSlice.actions;

export const fetchProducts = (amount) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axiosInstance.get("/product/get/all");
    console.log(res);
    dispatch(setProducts(res.data.data));
    dispatch(setLoading(false));
  } catch (err) {}
};

export const fetchProduct = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axiosInstance.get(`/product/get/one/${id}`);
    dispatch(setProduct(res.data.data));
    dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = (data) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const res = await axiosInstance.post("/product/add", data);
    ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
    dispatch(fetchProducts());
    dispatch(setRedirect(true));
    dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};
