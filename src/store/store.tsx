import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import technicianReducer from "./reducers/technicianSlice";
import worklistReducer from "./reducers/worklistSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    technician: technicianReducer,
    worklist: worklistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
