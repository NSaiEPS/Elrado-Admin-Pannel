import { toast } from "react-toastify";
import axios from "../../utils/axios";
import {
  setTechnicianLoader,
  setTechnicians,
} from "../reducers/technicianSlice";
import type { AppDispatch } from "../store";

export const getAllTechnicians =
  (successCallback: () => void) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setTechnicianLoader(true));
      const response = await axios.get("/technicians");
      if (response?.status) {
        dispatch(setTechnicians(response?.data?.data));
      } else {
        toast.error(response?.data?.message);
      }
      if (successCallback) {
        successCallback();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response);
    } finally {
      dispatch(setTechnicianLoader(false));
    }
  };
