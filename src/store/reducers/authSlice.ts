import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  authLoader: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginInfo: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setLogoutInfo: (state) => {
      state.user = {};
    },
    setAuthLoader: (state, action: PayloadAction<boolean>) => {
      state.authLoader = action.payload;
    },
  },
});

export const { setLoginInfo, setLogoutInfo, setAuthLoader } = authSlice.actions;

export default authSlice.reducer;
