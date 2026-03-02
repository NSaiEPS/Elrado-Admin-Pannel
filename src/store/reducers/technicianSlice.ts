import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  technicians: [],
  technicianLoader: false,
};

export const technicianSlice = createSlice({
  name: "technician",
  initialState,
  reducers: {
    setTechnicians: (state, action: PayloadAction<any>) => {
      state.technicians = action.payload;
    },
    setTechnicianLoader: (state, action: PayloadAction<boolean>) => {
      state.technicianLoader = action.payload;
    },
  },
});

export const { setTechnicians, setTechnicianLoader } = technicianSlice.actions;

export default technicianSlice.reducer;
