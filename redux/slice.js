/////////////////// CreateSlice from @reduxjs/toolkit for create a slice for use///////////
import { createSlice } from "@reduxjs/toolkit";

/// make a slice using createSlice method and here we pass an object. The object has two parts 1st one is initialState and 2nd one is reducers///
export const authSlice = createSlice({
  name: "auth",
  //////// in InitialState we define the initial stage of the object variables and set the initial values////////
  initialState: {
    isAuth: false,
    email: " ",
    phone: "",
  },
  ///  in reducers we passes function with two argumens, state and action.////
  ///  here state means initial state and action is the main functional parameter for this slice.action pass a payload///

  reducers: {
    setLogin: (state, action) => {
      state.isAuth = true;
      state.email = action.payload;
      state.phone = action.payload;
    },
  },
});
