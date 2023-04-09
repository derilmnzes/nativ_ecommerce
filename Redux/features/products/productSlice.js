import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  categories:[],
  product:{}
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload;
    },
    setCategories:(state,actions) => {
      state.categories = actions.payload
    },
    setProduct:(state,actions) =>{
      state.product = actions.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setProducts,setCategories,setProduct } = productSlice.actions;



export const fetchProducts = (amount) => async (dispatch) => {
try{
const res = await axios.get('https://fakestoreapi.com/products')
dispatch(setProducts(res.data))
}catch(err){

}
};

export const fetchCategories = (amount) => async (dispatch) => {
  try{
  const res = await axios.get('https://fakestoreapi.com/products/categories')
  dispatch(setCategories(res.data))
  }catch(err){
  
  }
  };

  export const fetchProduct = (id) => async (dispatch) => {
    try{
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    dispatch(setProduct(res.data))
    }catch(err){
    
    }
    };



