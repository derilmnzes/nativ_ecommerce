import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastAndroid } from "react-native";
import { setLoading } from "./loader/loader";
import axiosInstance from "../../axios/axiosInstance";

const initialState = {
  user: {
    auth: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});


export const { setUser } = userSlice.actions;

export const loginUser = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axiosInstance.post("/user/signin", data);
    dispatch(setUser({...res.data.user,auth:true}));
    dispatch(setLoading(false));
  } catch (err) {
    ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
  }
};

export const addUsers = (data, setFormType) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axiosInstance.post("/user/signup", data);
    setFormType('login');
    dispatch(setLoading(false));
  } catch (err) {
    ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
  }
};
