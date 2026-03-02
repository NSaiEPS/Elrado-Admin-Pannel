import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  worklists: [],
  worklistLoader: false,
};

export const worklistSlice = createSlice({
  name: "worklist",
  initialState,
  reducers: {
    setWorklists: (state, action: PayloadAction<any>) => {
      state.worklists = action.payload;
    },
    setWorklistLoader: (state, action: PayloadAction<boolean>) => {
      state.worklistLoader = action.payload;
    },
  },
});

export const { setWorklists, setWorklistLoader } = worklistSlice.actions;

export default worklistSlice.reducer;
